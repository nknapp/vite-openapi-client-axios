import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        export interface EncryptedPasswordResponse {
            encryptedPassword: string;
            adminPasswordConfigKey: string;
        }
        export interface PasswordEncryptionRequest {
            password: string;
        }
    }
}
declare namespace Paths {
    namespace EncryptPassword {
        export type RequestBody = Components.Schemas.PasswordEncryptionRequest;
        namespace Responses {
            export type $200 = Components.Schemas.EncryptedPasswordResponse;
        }
    }
}

export interface OperationMethods {
  /**
   * encryptPassword
   */
  'encryptPassword'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EncryptPassword.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EncryptPassword.Responses.$200>
}

export interface PathsDictionary {
  ['/api/encryptPassword']: {
    /**
     * encryptPassword
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EncryptPassword.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EncryptPassword.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
