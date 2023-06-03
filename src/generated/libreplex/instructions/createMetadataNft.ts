/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { Attribute, attributeBeet } from '../accounts/Attribute'

/**
 * @category Instructions
 * @category CreateMetadataNft
 * @category generated
 */
export type CreateMetadataNftInstructionArgs = {
  name: string
  offchainUrl: string
  isMutable: boolean
  attributes: Attribute[]
}
/**
 * @category Instructions
 * @category CreateMetadataNft
 * @category generated
 */
export const createMetadataNftStruct = new beet.FixableBeetArgsStruct<
  CreateMetadataNftInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['name', beet.utf8String],
    ['offchainUrl', beet.utf8String],
    ['isMutable', beet.bool],
    ['attributes', beet.array(attributeBeet)],
  ],
  'CreateMetadataNftInstructionArgs'
)
/**
 * Accounts required by the _createMetadataNft_ instruction
 *
 * @property [_writable_, **signer**] authority
 * @property [_writable_] metadata
 * @property [_writable_] collection
 * @property [_writable_] mint
 * @category Instructions
 * @category CreateMetadataNft
 * @category generated
 */
export type CreateMetadataNftInstructionAccounts = {
  authority: web3.PublicKey
  metadata: web3.PublicKey
  collection: web3.PublicKey
  mint: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const createMetadataNftInstructionDiscriminator = [
  225, 87, 1, 214, 172, 27, 178, 182,
]

/**
 * Creates a _CreateMetadataNft_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateMetadataNft
 * @category generated
 */
export function createCreateMetadataNftInstruction(
  accounts: CreateMetadataNftInstructionAccounts,
  args: CreateMetadataNftInstructionArgs,
  programId = new web3.PublicKey('L1BRc7ZYjj7t9k7E5xbdnKy3KhaY6sTcJx4gAsqxUbh')
) {
  const [data] = createMetadataNftStruct.serialize({
    instructionDiscriminator: createMetadataNftInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.collection,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}