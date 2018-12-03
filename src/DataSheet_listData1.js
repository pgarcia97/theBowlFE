import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_listData1 extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['textarea'] = "  (row 1)";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['textarea'] = "  (row 2)";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['textarea'] = "  (row 3)";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['textarea'] = "  (row 4)";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['textarea'] = "  (row 5)";
    item.key = key++;
  }

}
