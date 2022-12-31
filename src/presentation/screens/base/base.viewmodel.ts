import { injectable } from "inversify";

@injectable()
export abstract class BaseViewMode<Success, Failure> {
  protected abstract loading: boolean;
  protected abstract success: Success;
  protected abstract failure: Failure;

  protected abstract setLoading(loading: boolean): void;
  protected abstract setSuccess(success: Success): void;
  protected abstract setFailure(failure: Failure): void;
}
