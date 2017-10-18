/**
 * Created by yairbudic on 04/09/2017.
 */
import { Component, EventEmitter }              from '@angular/core';
import { FormBuilder, FormGroup, Validators }            from '@angular/forms';
import { EmitterService } from '../emitter.service';
import { SearchService } from './search.service';
import { Company } from './data-model';


@Component({
  selector: 'company-detail',
  providers: [ SearchService ],
  templateUrl: 'company-detail.component.html'
})

export class CompanyDetailComponent {
  companyForm: FormGroup; // <--- companyForm is of type FormGroup
  companies: Company[];

  constructor( private fb: FormBuilder, private searchService: SearchService ) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.companyForm = this.fb.group({
      name: ['', Validators.required ], // <--- the FormControl called "name"
      email: '',
    });
  }

  onSubmit() {
    this.searchService.getCompanies(this.companyForm.value.name)
      .subscribe(
        companies => this.companies = companies, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

}
