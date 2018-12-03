import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

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
    item['key'] = "start_text_231501";
    item['en'] = "Hi, Welcome to TheBowl";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_1045267";
    item['en'] = "BioBowl";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_field_844317";
    item['en'] = "Input Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "biobowl_textblock_583491";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "biobowl_textblock2_998703";
    item['en'] = "This is an example of a space for data in this view";
    
    item = {};
    this.items.push(item);
    item['key'] = "biobowl_field_32730";
    item['en'] = "Search";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button2_126577";
    item['en'] = "PsychBowl";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button3_307850";
    item['en'] = "LexBowl";
    
    item = {};
    this.items.push(item);
    item['key'] = "biobowl_fab_876355";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_fab_27695";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_fab2_354799";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_fab_335797";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "lexbowl_field_32338";
    item['en'] = "Search";
    
    item = {};
    this.items.push(item);
    item['key'] = "psychbowl_field_599910";
    item['en'] = "Search";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock_129067";
    item['en'] = "BioBowl";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock2_300213";
    item['en'] = "PsychBowl";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_textblock3_42342";
    item['en'] = "LexBowl";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text2_374134";
    item['en'] = "About Us";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text3_474608";
    item['en'] = "Boards";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text2_918174";
    item['en'] = "FAQ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text4_944715";
    item['en'] = "Sign In";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text5_655308";
    item['en'] = "Thank You For Stopping By… :) ";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text6_942310";
    item['en'] = "Tutorial";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text2_23934";
    item['en'] = "Home";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
