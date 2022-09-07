import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProcurementNatureApi } from 'src/app/api/procurement-nature/procurement-nature-api';
import { ProcurementNature } from 'src/app/procurement-nature/procurement-nature-interface';
import { KeyWordBaseApi } from 'src/app/api/keyword-base/keyword-base-api';
import { KeywordBaseDTO } from 'src/app/keyword-base/keyword-base-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/_services/toast.service';
import { ProcurementMethodApi } from 'src/app/api/procurement-method/procurement-method-api';
import { ProcurementMethodComponent } from '../../procurement-method.component';


@Component({
  selector: 'app-procurement-method-create',
  templateUrl: './procurement-method-create.component.html',
  styleUrls: ['./procurement-method-create.component.css']
})
export class ProcurementMethodCreateComponent implements OnInit {

  keywordBases: KeywordBaseDTO[] = [];
  procurementNatures: ProcurementNature[] = []
  procurementMethodCreateForm: FormGroup;


  constructor(private fb: FormBuilder,
    private keywordBaseApi: KeyWordBaseApi,
    private router: Router,
    private procurementNatureApi: ProcurementNatureApi,
    private toastService: ToastService,
    private modalService: NgbModal,
    private procurementMethodApi: ProcurementMethodApi,
    private procurementMethod: ProcurementMethodComponent) {

    this.procurementMethodCreateForm = this.fb.group({
      procurementNatureId: ['', Validators.required],
      keywordBaseId: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.getAllProcurementNature();
    this.getAllKeywordBase();
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  save() {
    const val = this.procurementMethodCreateForm.value;

    if (val.procurementNatureId && val.keywordBaseId) {


      this.procurementMethodApi.save(val.keywordBaseId, val.procurementNatureId)
        .then((res: any) => {
          console.log("response: ", res);
          this.procurementMethod.getAll();
          this.modalService.dismissAll();
          this.toastService.show('SuccessFully Created', {
            classname: 'bg-success text-light',
            delay: 2000,
            autohide: true
          });

          this.procurementMethodCreateForm = this.fb.group({
            procurementNatureId: ['', Validators.required],
            keywordBaseId: ['', Validators.required]
          });
          
        }).catch((err: any) => {
          console.log(err);
        });
    }

  }


  getAllProcurementNature() {
    this.procurementNatureApi.getAll()
      .then(res => {
        this.procurementNatures = res;
      }).catch(err => {
        console.log(err);
      });
  }

  getAllKeywordBase() {
    this.keywordBaseApi.getAll()
      .then(res => {
        this.keywordBases = res;
      }).catch(err => {
        console.log(err);
      });
  }



}
