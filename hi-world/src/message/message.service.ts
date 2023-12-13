import { Injectable } from '@nestjs/common'
import { AxiosResponse } from 'axios'
import { Observable } from 'rxjs'
import { WhatsAppApiResponse } from './dto/WhatsAppApiRes.dto'
import { HttpService } from '@nestjs/axios'

@Injectable()
export class MessageService {
  constructor(private httpService: HttpService) {}

  sendMessage(): Observable<AxiosResponse<WhatsAppApiResponse>> {
    return
  }
}
