import { IAddonRoutesOptions } from '@sheetbase/core-server';

import { IOptions } from './option';

export interface IModule {
    init(options: IOptions): IModule;
    registerRoutes(options?: IAddonRoutesOptions): void;
    object(path: string);
    list(path: string): any[];
    doc(collectionId: string, docId: string);
    collection(collectionId: string): any[];
    update(updates: {[key: string]: any}): boolean;
}
