%lang starknet

@contract_interface
namespace ILandRegistry {
    func register_land(land_id: felt, location_hash: felt, document_hash: felt);
    func get_land(land_id: felt) -> (owner: felt, location_hash: felt, document_hash: felt);
    func transfer_land(land_id: felt, new_owner: felt);
}

@storage_var
func lands(land_id: felt) -> (owner: felt, location_hash: felt, document_hash: felt) {}

@external
func register_land{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    land_id: felt, location_hash: felt, document_hash: felt
) {
    let (caller) = get_caller_address();
    let (existing_owner, _, _) = lands.read(land_id);
    assert existing_owner = 0;
    lands.write(land_id, caller, location_hash, document_hash);
    return ();
}

@view
func get_land{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    land_id: felt
) -> (owner: felt, location_hash: felt, document_hash: felt) {
    let (owner, location_hash, document_hash) = lands.read(land_id);
    return (owner, location_hash, document_hash);
}

@external
func transfer_land{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    land_id: felt, new_owner: felt
) {
    let (caller) = get_caller_address();
    let (owner, location_hash, document_hash) = lands.read(land_id);
    assert caller = owner;
    lands.write(land_id, new_owner, location_hash, document_hash);
    return ();
}
