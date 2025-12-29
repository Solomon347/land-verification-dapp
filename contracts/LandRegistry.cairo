#[starknet::contract]
mod LandRegistry {
    use starknet::ContractAddress;
    use starknet::get_caller_address;
    use core::starknet::storage::{
        Map, StorageMapReadAccess, StorageMapWriteAccess
    };

    #[storage]
    struct Storage {
        land_owners: Map<u256, ContractAddress>,
        land_documents: Map<u256, felt252>,
        land_locations: Map<u256, felt252>,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        LandRegistered: LandRegistered,
        LandTransferred: LandTransferred,
    }

    #[derive(Drop, starknet::Event)]
    struct LandRegistered {
        land_id: u256,
        owner: ContractAddress,
        document_hash: felt252,
        location: felt252,
    }

    #[derive(Drop, starknet::Event)]
    struct LandTransferred {
        land_id: u256,
        from_owner: ContractAddress,
        to_owner: ContractAddress,
    }

    #[constructor]
    fn constructor(ref self: ContractState) {
    }

    #[abi(embed_v0)]
    impl LandRegistryImpl of super::ILandRegistry<ContractState> {
        fn register_land(
            ref self: ContractState,
            land_id: u256,
            document_hash: felt252,
            location: felt252
        ) {
            let caller = get_caller_address();
            
            let current_owner = self.land_owners.read(land_id);
            let zero_address: ContractAddress = 0.try_into().unwrap();
            
            assert(current_owner == zero_address, 'Land already registered');

            self.land_owners.write(land_id, caller);
            self.land_documents.write(land_id, document_hash);
            self.land_locations.write(land_id, location);

            self.emit(LandRegistered {
                land_id: land_id,
                owner: caller,
                document_hash: document_hash,
                location: location,
            });
        }

        fn get_land(
            self: @ContractState,
            land_id: u256
        ) -> (ContractAddress, felt252, felt252) {
            let owner = self.land_owners.read(land_id);
            let document_hash = self.land_documents.read(land_id);
            let location = self.land_locations.read(land_id);
            
            (owner, document_hash, location)
        }

        fn transfer_land(
            ref self: ContractState,
            land_id: u256,
            new_owner: ContractAddress
        ) {
            let caller = get_caller_address();
            let current_owner = self.land_owners.read(land_id);

            assert(caller == current_owner, 'Not the owner');

            self.land_owners.write(land_id, new_owner);

            self.emit(LandTransferred {
                land_id: land_id,
                from_owner: caller,
                to_owner: new_owner,
            });
        }
    }
}

#[starknet::interface]
trait ILandRegistry<TContractState> {
    fn register_land(
        ref self: TContractState,
        land_id: u256,
        document_hash: felt252,
        location: felt252
    );
    
    fn get_land(
        self: @TContractState,
        land_id: u256
    ) -> (starknet::ContractAddress, felt252, felt252);
    
    fn transfer_land(
        ref self: TContractState,
        land_id: u256,
        new_owner: starknet::ContractAddress
    );
}
