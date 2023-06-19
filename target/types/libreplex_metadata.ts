export type LibreplexMetadata = {
  "version": "0.1.0",
  "name": "libreplex_metadata",
  "instructions": [
    {
      "name": "createGroup",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "group",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "group"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "seed"
              }
            ]
          }
        },
        {
          "name": "seed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collectionInput",
          "type": {
            "defined": "GroupInput"
          }
        }
      ]
    },
    {
      "name": "updateGroup",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "delegatedGroupWidePermissions",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "permissions"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "authority"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Group",
                "path": "group"
              }
            ]
          }
        },
        {
          "name": "group",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "group"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "seed"
              }
            ]
          }
        },
        {
          "name": "seed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collectionInput",
          "type": {
            "defined": "GroupInput"
          }
        }
      ]
    },
    {
      "name": "groupAdd",
      "accounts": [
        {
          "name": "metadataAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "groupAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegatedMetadataSpecificPermissions",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "permissions"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "metadata_authority"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Metadata",
                "path": "metadata.update_authority"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Metadata",
                "path": "metadata"
              }
            ]
          }
        },
        {
          "name": "delegatedGroupWidePermissions",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "permissions"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group_authority"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Group",
                "path": "group"
              }
            ]
          }
        },
        {
          "name": "group",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updatePermissions",
      "accounts": [
        {
          "name": "updateAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userPermissions",
          "isMut": true,
          "isSigner": false,
          "relations": [
            "update_authority"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "EditPermissionsInput"
          }
        }
      ]
    },
    {
      "name": "createMetadata",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "metadata"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadataInput",
          "type": {
            "defined": "CreateMetadataInput"
          }
        }
      ]
    },
    {
      "name": "extendMetadata",
      "accounts": [
        {
          "name": "updateAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "metadata"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "mint"
              }
            ]
          },
          "relations": [
            "update_authority"
          ]
        },
        {
          "name": "metadataExtended",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "metadata_extension"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Metadata",
                "path": "metadata"
              }
            ]
          }
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadataInput",
          "type": {
            "defined": "ExtendMetadataInput"
          }
        }
      ]
    },
    {
      "name": "deleteMetadataExtension",
      "accounts": [
        {
          "name": "updateAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false,
          "relations": [
            "update_authority"
          ]
        },
        {
          "name": "metadataExtension",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "metadata_extension"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Metadata",
                "path": "metadata"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "deletePermissions",
      "accounts": [
        {
          "name": "updateAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "permissions",
          "isMut": true,
          "isSigner": false,
          "relations": [
            "update_authority"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "group",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "publicKey"
          },
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "itemCount",
            "type": "u32"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "url",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "templateConfiguration",
            "type": {
              "defined": "TemplateConfiguration"
            }
          },
          {
            "name": "royalties",
            "type": {
              "option": {
                "defined": "Royalties"
              }
            }
          },
          {
            "name": "permittedSigners",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "attributeTypes",
            "type": {
              "vec": {
                "defined": "AttributeType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "metadataExtension",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "metadata",
            "type": "publicKey"
          },
          {
            "name": "attributes",
            "type": "bytes"
          },
          {
            "name": "signers",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "royalties",
            "type": {
              "option": {
                "defined": "Royalties"
              }
            }
          },
          {
            "name": "license",
            "type": {
              "option": {
                "defined": "License"
              }
            }
          }
        ]
      }
    },
    {
      "name": "metadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "isMutable",
            "type": "bool"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "asset",
            "type": {
              "defined": "Asset"
            }
          },
          {
            "name": "description",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "group",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "delegatePermissions",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "reference",
            "type": "publicKey"
          },
          {
            "name": "permissions",
            "type": {
              "vec": {
                "defined": "PermissionType"
              }
            }
          },
          {
            "name": "updateAuthority",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ExtendMetadataInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "attributes",
            "type": "bytes"
          },
          {
            "name": "royalties",
            "type": {
              "option": {
                "defined": "Royalties"
              }
            }
          },
          {
            "name": "invokedPermission",
            "type": {
              "defined": "PermissionType"
            }
          }
        ]
      }
    },
    {
      "name": "EditPermissionsInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "permissions",
            "type": {
              "vec": {
                "defined": "PermissionType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "AttributeType",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "permittedValues",
            "type": {
              "vec": {
                "defined": "AttributeValue"
              }
            }
          },
          {
            "name": "deleted",
            "type": "bool"
          },
          {
            "name": "continuedAtIndex",
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "continuedFromIndex",
            "type": {
              "option": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "BaseUrlConfiguration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "prefix",
            "type": "string"
          },
          {
            "name": "suffix",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "GroupInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "url",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "metadataRenderMode",
            "type": {
              "defined": "TemplateConfiguration"
            }
          },
          {
            "name": "royalties",
            "type": {
              "option": {
                "defined": "Royalties"
              }
            }
          },
          {
            "name": "attributeTypes",
            "type": {
              "vec": {
                "defined": "AttributeType"
              }
            }
          },
          {
            "name": "permittedSigners",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "AttributesInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "attributes",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "CreateMetadataInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "asset",
            "type": {
              "defined": "Asset"
            }
          },
          {
            "name": "description",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "updateAuthority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "UpdateMetadataInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "asset",
            "type": {
              "defined": "Asset"
            }
          },
          {
            "name": "description",
            "type": {
              "option": "string"
            }
          }
        ]
      }
    },
    {
      "name": "RoyaltyShare",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "recipient",
            "type": "publicKey"
          },
          {
            "name": "share",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "Royalties",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bps",
            "type": "u16"
          },
          {
            "name": "shares",
            "type": {
              "vec": {
                "defined": "RoyaltyShare"
              }
            }
          }
        ]
      }
    },
    {
      "name": "TemplateConfiguration",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Template",
            "fields": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "image_url",
                "type": "string"
              },
              {
                "name": "description",
                "type": "string"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "AttributeValue",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Word",
            "fields": [
              {
                "name": "value",
                "type": "string"
              }
            ]
          },
          {
            "name": "U8",
            "fields": [
              {
                "name": "value",
                "type": "u8"
              }
            ]
          },
          {
            "name": "U16",
            "fields": [
              {
                "name": "value",
                "type": "u16"
              }
            ]
          },
          {
            "name": "U32",
            "fields": [
              {
                "name": "value",
                "type": "u32"
              }
            ]
          },
          {
            "name": "U64",
            "fields": [
              {
                "name": "value",
                "type": "u64"
              }
            ]
          },
          {
            "name": "I8",
            "fields": [
              {
                "name": "value",
                "type": "i8"
              }
            ]
          },
          {
            "name": "I16",
            "fields": [
              {
                "name": "value",
                "type": "i16"
              }
            ]
          },
          {
            "name": "I32",
            "fields": [
              {
                "name": "value",
                "type": "i32"
              }
            ]
          },
          {
            "name": "I64",
            "fields": [
              {
                "name": "value",
                "type": "i64"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "GroupEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Update"
          },
          {
            "name": "Delete"
          }
        ]
      }
    },
    {
      "name": "License",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NoLicense"
          },
          {
            "name": "Custom",
            "fields": [
              {
                "name": "license_url",
                "type": "string"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Asset",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Json",
            "fields": [
              {
                "name": "url",
                "type": "string"
              }
            ]
          },
          {
            "name": "JsonTemplate",
            "fields": [
              {
                "name": "url_parameter",
                "type": "string"
              }
            ]
          },
          {
            "name": "Image",
            "fields": [
              {
                "name": "url",
                "type": "string"
              }
            ]
          },
          {
            "name": "ChainRenderer",
            "fields": [
              {
                "name": "program_id",
                "type": "publicKey"
              }
            ]
          },
          {
            "name": "Inscription",
            "fields": [
              {
                "name": "account_id",
                "type": "publicKey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "MetadataEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Update"
          },
          {
            "name": "Delete"
          }
        ]
      }
    },
    {
      "name": "PermissionEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Update"
          },
          {
            "name": "Delete"
          }
        ]
      }
    },
    {
      "name": "PermissionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Update"
          },
          {
            "name": "AddToGroup"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "ExtendMetadataEvent",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "EditCollectionEvent",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        }
      ]
    },
    {
      "name": "EditMetadataEvent",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        }
      ]
    },
    {
      "name": "GroupEvent",
      "fields": [
        {
          "name": "eventType",
          "type": {
            "defined": "GroupEventType"
          },
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MetadataEvent",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eventType",
          "type": {
            "defined": "MetadataEventType"
          },
          "index": false
        }
      ]
    },
    {
      "name": "PermissionEvent",
      "fields": [
        {
          "name": "reference",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eventType",
          "type": {
            "defined": "PermissionEventType"
          },
          "index": false
        }
      ]
    },
    {
      "name": "MetadataPermissionEvent",
      "fields": [
        {
          "name": "metadata",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ]
};

export const IDL: LibreplexMetadata = {
  "version": "0.1.0",
  "name": "libreplex_metadata",
  "instructions": [
    {
      "name": "createGroup",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "group",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "group"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "seed"
              }
            ]
          }
        },
        {
          "name": "seed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collectionInput",
          "type": {
            "defined": "GroupInput"
          }
        }
      ]
    },
    {
      "name": "updateGroup",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "delegatedGroupWidePermissions",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "permissions"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "authority"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Group",
                "path": "group"
              }
            ]
          }
        },
        {
          "name": "group",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "group"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "seed"
              }
            ]
          }
        },
        {
          "name": "seed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collectionInput",
          "type": {
            "defined": "GroupInput"
          }
        }
      ]
    },
    {
      "name": "groupAdd",
      "accounts": [
        {
          "name": "metadataAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "groupAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegatedMetadataSpecificPermissions",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "permissions"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "metadata_authority"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Metadata",
                "path": "metadata.update_authority"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Metadata",
                "path": "metadata"
              }
            ]
          }
        },
        {
          "name": "delegatedGroupWidePermissions",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "permissions"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group_authority"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Group",
                "path": "group"
              }
            ]
          }
        },
        {
          "name": "group",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updatePermissions",
      "accounts": [
        {
          "name": "updateAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userPermissions",
          "isMut": true,
          "isSigner": false,
          "relations": [
            "update_authority"
          ]
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "EditPermissionsInput"
          }
        }
      ]
    },
    {
      "name": "createMetadata",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "metadata"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadataInput",
          "type": {
            "defined": "CreateMetadataInput"
          }
        }
      ]
    },
    {
      "name": "extendMetadata",
      "accounts": [
        {
          "name": "updateAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "metadata"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "mint"
              }
            ]
          },
          "relations": [
            "update_authority"
          ]
        },
        {
          "name": "metadataExtended",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "metadata_extension"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Metadata",
                "path": "metadata"
              }
            ]
          }
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadataInput",
          "type": {
            "defined": "ExtendMetadataInput"
          }
        }
      ]
    },
    {
      "name": "deleteMetadataExtension",
      "accounts": [
        {
          "name": "updateAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false,
          "relations": [
            "update_authority"
          ]
        },
        {
          "name": "metadataExtension",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "metadata_extension"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Metadata",
                "path": "metadata"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "deletePermissions",
      "accounts": [
        {
          "name": "updateAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "permissions",
          "isMut": true,
          "isSigner": false,
          "relations": [
            "update_authority"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "group",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "publicKey"
          },
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "itemCount",
            "type": "u32"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "url",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "templateConfiguration",
            "type": {
              "defined": "TemplateConfiguration"
            }
          },
          {
            "name": "royalties",
            "type": {
              "option": {
                "defined": "Royalties"
              }
            }
          },
          {
            "name": "permittedSigners",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "attributeTypes",
            "type": {
              "vec": {
                "defined": "AttributeType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "metadataExtension",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "metadata",
            "type": "publicKey"
          },
          {
            "name": "attributes",
            "type": "bytes"
          },
          {
            "name": "signers",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "royalties",
            "type": {
              "option": {
                "defined": "Royalties"
              }
            }
          },
          {
            "name": "license",
            "type": {
              "option": {
                "defined": "License"
              }
            }
          }
        ]
      }
    },
    {
      "name": "metadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "isMutable",
            "type": "bool"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "asset",
            "type": {
              "defined": "Asset"
            }
          },
          {
            "name": "description",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "group",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "delegatePermissions",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "reference",
            "type": "publicKey"
          },
          {
            "name": "permissions",
            "type": {
              "vec": {
                "defined": "PermissionType"
              }
            }
          },
          {
            "name": "updateAuthority",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ExtendMetadataInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "attributes",
            "type": "bytes"
          },
          {
            "name": "royalties",
            "type": {
              "option": {
                "defined": "Royalties"
              }
            }
          },
          {
            "name": "invokedPermission",
            "type": {
              "defined": "PermissionType"
            }
          }
        ]
      }
    },
    {
      "name": "EditPermissionsInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "permissions",
            "type": {
              "vec": {
                "defined": "PermissionType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "AttributeType",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "permittedValues",
            "type": {
              "vec": {
                "defined": "AttributeValue"
              }
            }
          },
          {
            "name": "deleted",
            "type": "bool"
          },
          {
            "name": "continuedAtIndex",
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "continuedFromIndex",
            "type": {
              "option": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "BaseUrlConfiguration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "prefix",
            "type": "string"
          },
          {
            "name": "suffix",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "GroupInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "url",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "metadataRenderMode",
            "type": {
              "defined": "TemplateConfiguration"
            }
          },
          {
            "name": "royalties",
            "type": {
              "option": {
                "defined": "Royalties"
              }
            }
          },
          {
            "name": "attributeTypes",
            "type": {
              "vec": {
                "defined": "AttributeType"
              }
            }
          },
          {
            "name": "permittedSigners",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "AttributesInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "attributes",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "CreateMetadataInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "asset",
            "type": {
              "defined": "Asset"
            }
          },
          {
            "name": "description",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "updateAuthority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "UpdateMetadataInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "asset",
            "type": {
              "defined": "Asset"
            }
          },
          {
            "name": "description",
            "type": {
              "option": "string"
            }
          }
        ]
      }
    },
    {
      "name": "RoyaltyShare",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "recipient",
            "type": "publicKey"
          },
          {
            "name": "share",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "Royalties",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bps",
            "type": "u16"
          },
          {
            "name": "shares",
            "type": {
              "vec": {
                "defined": "RoyaltyShare"
              }
            }
          }
        ]
      }
    },
    {
      "name": "TemplateConfiguration",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Template",
            "fields": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "image_url",
                "type": "string"
              },
              {
                "name": "description",
                "type": "string"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "AttributeValue",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Word",
            "fields": [
              {
                "name": "value",
                "type": "string"
              }
            ]
          },
          {
            "name": "U8",
            "fields": [
              {
                "name": "value",
                "type": "u8"
              }
            ]
          },
          {
            "name": "U16",
            "fields": [
              {
                "name": "value",
                "type": "u16"
              }
            ]
          },
          {
            "name": "U32",
            "fields": [
              {
                "name": "value",
                "type": "u32"
              }
            ]
          },
          {
            "name": "U64",
            "fields": [
              {
                "name": "value",
                "type": "u64"
              }
            ]
          },
          {
            "name": "I8",
            "fields": [
              {
                "name": "value",
                "type": "i8"
              }
            ]
          },
          {
            "name": "I16",
            "fields": [
              {
                "name": "value",
                "type": "i16"
              }
            ]
          },
          {
            "name": "I32",
            "fields": [
              {
                "name": "value",
                "type": "i32"
              }
            ]
          },
          {
            "name": "I64",
            "fields": [
              {
                "name": "value",
                "type": "i64"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "GroupEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Update"
          },
          {
            "name": "Delete"
          }
        ]
      }
    },
    {
      "name": "License",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NoLicense"
          },
          {
            "name": "Custom",
            "fields": [
              {
                "name": "license_url",
                "type": "string"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Asset",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Json",
            "fields": [
              {
                "name": "url",
                "type": "string"
              }
            ]
          },
          {
            "name": "JsonTemplate",
            "fields": [
              {
                "name": "url_parameter",
                "type": "string"
              }
            ]
          },
          {
            "name": "Image",
            "fields": [
              {
                "name": "url",
                "type": "string"
              }
            ]
          },
          {
            "name": "ChainRenderer",
            "fields": [
              {
                "name": "program_id",
                "type": "publicKey"
              }
            ]
          },
          {
            "name": "Inscription",
            "fields": [
              {
                "name": "account_id",
                "type": "publicKey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "MetadataEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Create"
          },
          {
            "name": "Update"
          },
          {
            "name": "Delete"
          }
        ]
      }
    },
    {
      "name": "PermissionEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Update"
          },
          {
            "name": "Delete"
          }
        ]
      }
    },
    {
      "name": "PermissionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Update"
          },
          {
            "name": "AddToGroup"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "ExtendMetadataEvent",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "EditCollectionEvent",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        }
      ]
    },
    {
      "name": "EditMetadataEvent",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        }
      ]
    },
    {
      "name": "GroupEvent",
      "fields": [
        {
          "name": "eventType",
          "type": {
            "defined": "GroupEventType"
          },
          "index": false
        },
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "name",
          "type": "string",
          "index": false
        },
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "MetadataEvent",
      "fields": [
        {
          "name": "id",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "mint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eventType",
          "type": {
            "defined": "MetadataEventType"
          },
          "index": false
        }
      ]
    },
    {
      "name": "PermissionEvent",
      "fields": [
        {
          "name": "reference",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "eventType",
          "type": {
            "defined": "PermissionEventType"
          },
          "index": false
        }
      ]
    },
    {
      "name": "MetadataPermissionEvent",
      "fields": [
        {
          "name": "metadata",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ]
};