import { ProcurementMethodComponent } from './../../procurement-method.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KeyWordBaseApi } from 'src/app/api/keyword-base/keyword-base-api';
import { ProcurementMethodApi } from 'src/app/api/procurement-method/procurement-method-api';
import { ProcurementNatureApi } from 'src/app/api/procurement-nature/procurement-nature-api';
import { KeywordBaseDTO } from 'src/app/keyword-base/keyword-base-interface';
import { ProcurementNature } from 'src/app/procurement-nature/procurement-nature-interface';
import { ToastService } from 'src/app/_services/toast.service';
import { ProcurementMethod } from '../../procurement-method-interface';

@Component({
  selector: 'app-procurement-method-update',
  templateUrl: './procurement-method-update.component.html',
  styleUrls: ['./procurement-method-update.component.css']
})
export class ProcurementMethodUpdateComponent implements OnInit {


  @Input()
  id!: number;

  keywordBases: KeywordBaseDTO[] = [];
  procurementNatures: ProcurementNature[] = [];
  procurementMethodUpdateForm: FormGroup;

  procurementMethod: ProcurementMethod = {
    id: 0,
    keywordBaseId: 0,
    procurementNatureId: 0
  };


  constructor(private fb: FormBuilder,
    private keywordBaseApi: KeyWordBaseApi,
    private router: Router,
    private route: ActivatedRoute,
    private procurementNatureApi: ProcurementNatureApi,
    private toastService: ToastService,
    private modalService: NgbModal,
    private procurementMethodApi: ProcurementMethodApi,
    private procurementMethodComponent: ProcurementMethodComponent) {

    this.procurementMethodUpdateForm = this.fb.group({
      procurementNatureId: ['', Validators.required],
      keywordBaseId: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.getAllProcurementNature();
    this.getAllKeywordBase();
    this.getProcurementMethod(this.id);
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  update() {
    const val = this.procurementMethodUpdateForm.value;

    if (val.procurementNatureId && val.keywordBaseId) {


      this.procurementMethodApi.update(this.id, val.keywordBaseId, val.procurementNatureId)
        .then((res: any) => {
          console.log("response: ", res);
          this.procurementMethodComponent.getAll();
          this.modalService.dismissAll();
          this.toastService.show('SuccessFully Updated', {
            classname: 'bg-info text-light',
            delay: 2000,
            autohide: true
          });

          this.procurementMethodUpdateForm = this.fb.group({
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

  getProcurementMethod(id: number) {
    this.procurementMethodApi.getProcurementMethod(id)
      .then(res => {
        this.procurementMethod = res;
      }).catch(err => {
        console.log(err);
      })
  }

}
