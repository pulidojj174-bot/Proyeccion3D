import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ServiceTemplate } from "../../shared/templates/service-template/service-template";

@Component({
  selector: 'app-service',
  imports: [ServiceTemplate],
  templateUrl: './service.html',
  styleUrl: './service.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Service {

}
