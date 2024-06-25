import {HexBinary, Boolean} from "./types";
export type Uint128 = string;
export type Addr = string;
export type AssetInfo = {
  token: {
    contract_addr: Addr;
  };
} | {
  native_token: {
    denom: string;
  };
};
export interface InstantiateMsg {
  bridge_adapter: string;
  relayer_fee?: Uint128 | null;
  relayer_fee_receiver: Addr;
  relayer_fee_token: AssetInfo;
  swap_router_contract: string;
  token_fee_receiver: Addr;
  validator_contract_addr: Addr;
}
export type ExecuteMsg = {
  read_transaction: {
    tx_boc: HexBinary;
    tx_proof: HexBinary;
  };
} | {
  update_mapping_pair: UpdatePairMsg;
} | {
  bridge_to_ton: BridgeToTonMsg;
} | {
  receive: Cw20ReceiveMsg;
} | {
  submit_bridge_to_ton_info: {
    data: HexBinary;
  };
} | {
  update_owner: {
    new_owner: Addr;
  };
} | {
  update_config: {
    bridge_adapter?: string | null;
    relayer_fee?: Uint128 | null;
    relayer_fee_receiver?: Addr | null;
    relayer_fee_token?: AssetInfo | null;
    swap_router_contract?: string | null;
    token_fee?: TokenFee[] | null;
    token_fee_receiver?: Addr | null;
    validator_contract_addr?: Addr | null;
  };
};
export type Binary = string;
export interface UpdatePairMsg {
  denom: string;
  local_asset_info: AssetInfo;
  local_asset_info_decimals: number;
  local_channel_id: string;
  opcode: HexBinary;
  remote_decimals: number;
}
export interface BridgeToTonMsg {
  crc_src: number;
  denom: string;
  local_channel_id: string;
  to: string;
}
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
export interface TokenFee {
  ratio: Ratio;
  token_denom: string;
}
export interface Ratio {
  denominator: number;
  nominator: number;
}
export type QueryMsg = {
  owner: {};
} | {
  config: {};
} | {
  is_tx_processed: {
    tx_hash: HexBinary;
  };
} | {
  channel_state_data: {
    channel_id: string;
  };
};
export interface MigrateMsg {
  bridge_adapter: string;
  relayer_fee?: Uint128 | null;
  relayer_fee_receiver: Addr;
  relayer_fee_token: AssetInfo;
  swap_router_contract: string;
  token_fee_receiver: Addr;
  validator_contract_addr: Addr;
}
export type Amount = {
  native: Coin;
} | {
  cw20: Cw20CoinVerified;
};
export interface ChannelResponse {
  balances: Amount[];
  total_sent: Amount[];
}
export interface Coin {
  amount: Uint128;
  denom: string;
}
export interface Cw20CoinVerified {
  address: Addr;
  amount: Uint128;
}
export type RouterController = string;
export interface Config {
  bridge_adapter: string;
  relayer_fee: Uint128;
  relayer_fee_receiver: Addr;
  relayer_fee_token: AssetInfo;
  swap_router_contract: RouterController;
  token_fee_receiver: Addr;
  validator_contract_addr: Addr;
}
export type String = string;