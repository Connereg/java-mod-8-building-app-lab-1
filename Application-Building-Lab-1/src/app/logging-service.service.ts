
export class LoggingService {
  log(logMessage: string) {
    console.log(new Date() + "::" + logMessage);
  }
}