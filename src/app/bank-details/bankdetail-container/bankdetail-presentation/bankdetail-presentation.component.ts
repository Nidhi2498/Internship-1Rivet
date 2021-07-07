import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { Bankdetails } from '../../bankdetails.model';
import { BankserviceService } from '../../bankservice.service';
import { BankdetailserviceService } from '../bankdetail-presenter/bankdetailservice.service';

@Component({
  selector: 'app-bankdetail-presentation',
  templateUrl: './bankdetail-presentation.component.html',
  styleUrls: ['./bankdetail-presentation.component.css'],
  viewProviders: [BankdetailserviceService]
})
export class BankdetailPresentationComponent implements OnInit {
  //declare formgroup 
  public accountFormGroup!: FormGroup;

  public bankdetails : Bankdetails[] = [];
  public Search = new FormControl()
  private _accountbankDetail : Bankdetails[] = [];
  account_name:any;

  public addvalue! :any;

  public isSubmitted = false;
  @Output() add = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  @Output() getbankdetail = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  //Set method to set the value
  @Input() public set accountbankDetail(value:Bankdetails[]){
    if(value){
      this.bankdetails;
      this._accountbankDetail = value
    }
  }



  //get method for getting bank details
  public get accountbankDetail(): Bankdetails[]{
    return this._accountbankDetail;
  }



  constructor(private formBuilder: FormBuilder, 
    private bankservice:BankserviceService,
    private bankservicePresenter : BankdetailserviceService
    ) 
    {
      this.accountFormGroup = this.formBuilder.group({
        id:[''],
        account_no : ['',  [Validators.required,  Validators.pattern('[a-zA-Z ]*'), Validators.minLength(5), Validators.maxLength(15) ]],
        account_name: ['', [Validators.required,  Validators.pattern('[a-zA-Z ]*')]],
        email_id : ['', [Validators.required, Validators.email]],
        phone_no:['',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),Validators.required]],
        bank_name : ['---Select Bank---', [Validators.required]],
        gender : ['male'],
        address : ['', [Validators.required]],
        basic_amt : ['', [Validators.required]],
        currency : ['---Select Currency---', [Validators.required]]

    })

   }


   //get all bank details
   public btnListBankDetail(){
      return this.bankservice.getBankDetail();
   }

  
   //Form data save and edit from table
   public result :any;
   public btnSave(data: any){
     if(this.accountFormGroup.value != null){
      this.isSubmitted = true;
     }
     
     if(this.accountFormGroup.value.id!= '' && this.accountFormGroup.value.id)
     { 
       this.update.emit(this.accountFormGroup.value);
     }
     else{
      this.add.emit(this.accountFormGroup.value);
     }
   }

 
  

   //Get data by ID
   public getBankDetailById(id:number){
    this.bankservice.geteditBankDetailbyId(id).subscribe((data:Bankdetails)=>{
      //let result = this. femaleCondition();
      this.accountFormGroup.patchValue(data);
      alert("Bank detail added to form");
    })
   }

    //Get all bank detail
    public getAllBankDetails(){
      this.getbankdetail.emit(this.accountFormGroup.value);
    }



   //Delete data 
   public deleteBankDetail(id:number){
     this.delete.emit(this.accountFormGroup.value)
   }


   //Reset the form data
   public btnReset(){
      this.accountFormGroup.reset();
   }


  
  ngOnInit(): void {
        //   this.bankservice.getBankDetail().subscribe((data)=>{
        //     this.bankdetails = data;
        // });

        // this.search.valueChanges.pipe(
        //   debounceTime(1000), 
        //   filter((data) => this.searches
        //   })
           

  }

}



