export type SignUpEntity = {
  readonly access_token: string;
  readonly refresh_token: string;
};

export type SignUpParamEntity = {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}
