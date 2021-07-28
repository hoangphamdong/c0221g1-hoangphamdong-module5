import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: Dictionary[] = [
    {
      id: 1,
      english: 'hello',
      vietnamese: 'xin chào',
    },
    {
      id: 2,
      english: 'name',
      vietnamese: 'tên',
    },
    {
      id: 3,
      english: 'morning',
      vietnamese: 'buổi sáng',
    },
    {
      id: 4,
      english: 'book',
      vietnamese: 'quyển sách',
    },
    {
      id: 5,
      english: 'apple',
      vietnamese: 'quả táo',
    },
  ];

  constructor() {
  }

  getAll() {
    return this.dictionaries
  }

  findById(id: number) {
    return this.dictionaries.find(dictionary => dictionary.id == id);
  }
}
