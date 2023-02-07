import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleLeft, faAddressBook, faArrowAltCircleRight, faCalendarAlt, faClone, faCircle, faCommentDots, faCopyright, faCreditCard, faEdit, faEnvelope, faEye, faEyeSlash, faFile, faFileExcel, faFilePdf, faImage, faListAlt, faPaperPlane, faStickyNote, faTrashAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import { faArchive, faAt, faBan, faBarcode, faBookReader, faCamera, faChartLine, faCheck, faChevronUp, faChevronDown, faChevronRight, faCircleNotch, faCog, faCompressAlt, faDatabase, faDoorClosed, faDownload, faDharmachakra, faEllipsisV, faEuroSign, faExchangeAlt, faExpandAlt, faFileDownload, faSave, faFilter, faGhost, faHome, faInfo, faLevelUpAlt, faListOl, faMinus, faNetworkWired, faPen, faPencilRuler, faShoppingBasket, faPhone, faPlaneArrival, faPlus, faPowerOff, faPrint, faShippingFast, faSignature, faTable, faTimes, faTruck, faTruckLoading, faUndo, faUniversity, faUpload, faUserLock, faUserPlus, faUsers, faUserSecret, faUserTag, faUserTie, faUtensils, faUsersCog, faWarehouse, faWifi, faWrench, faMedkit, faServer, faDesktop, faTerminal, faPuzzlePiece, faSpider } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonHelpdeskComponent } from './component/buttons/button-helpdesk/button-helpdesk.component';
import { ButtonfilterPipe } from './buttonfilter.pipe';
import { ButtonAnswerComponent } from './component/buttons/button-answer/button-answer.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonHelpdeskComponent,
    ButtonfilterPipe,
    ButtonAnswerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // library.addIconPacks(far, fas);
    library.addIcons(faArrowAltCircleLeft
      , faAddressBook
      , faArchive
      , faArrowAltCircleRight
      , faAt
      , faBan
      , faBarcode
      , faBookReader
      , faCalendarAlt
      , faCamera
      , faChartLine
      , faCheck
      , faSpider
      , faServer
      , faChevronUp
      , faChevronDown
      , faChevronRight
      , faClone
      , faCircle
      , faCircleNotch
      , faCommentDots
      , faCopyright
      , faCog
      , faCompressAlt
      , faCreditCard
      , faDesktop
      , faSave
      , faTerminal
      , faDatabase
      , faDoorClosed
      , faDownload
      , faDharmachakra
      , faEdit
      , faEllipsisV
      , faEnvelope
      , faEuroSign
      , faExchangeAlt
      , faExpandAlt
      , faEye
      , faEyeSlash
      , faFile
      , faFileDownload
      , faFileExcel
      , faFilePdf
      , faFilter
      , faGhost
      , faHome
      , faInfo
      , faImage
      , faLevelUpAlt
      , faListAlt
      , faListOl
      , faMinus
      , faNetworkWired
      , faPaperPlane
      , faPen
      , faPencilRuler
      , faShoppingBasket
      , faPhone
      , faPlaneArrival
      , faPlus
      , faPowerOff
      , faPrint
      , faShippingFast
      , faSignature
      , faStickyNote
      , faTable
      , faTimes
      , faTrashAlt
      , faTruck
      , faTruckLoading
      , faUndo
      , faUniversity
      , faUpload
      , faUser
      , faUserLock
      , faUserPlus
      , faUsers
      , faUserSecret
      , faUserTag
      , faUserTie
      , faUtensils
      , faUsersCog
      , faWarehouse
      , faWifi
      , faWrench
      , faMedkit
      , faPuzzlePiece
      , faSpider
      , faServer
    )
  }
}
