import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionaryForm: FormGroup;
  id: number;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const dictionary = this.getDictionary(this.id);
      this.dictionaryForm = new FormGroup({
        id: new FormControl(dictionary.id),
        english: new FormControl(dictionary.english),
        vietnamese: new FormControl(dictionary.vietnamese),
      });
    });
  }

  ngOnInit(): void {
  }

  getDictionary(id: number) {
    return this.dictionaryService.findById(id);
  }

}
