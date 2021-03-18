import IMailTemplateProvider from '../models/IMailTemplateProvider';

class fakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default fakeMailTemplateProvider;
