import { Component, OnInit } from "@angular/core";
import { NbToastrService } from "@nebular/theme";
import { invoke } from "@tauri-apps/api";
import { MENU_ITEMS } from "./pages-menu";
import { appWindow } from "@tauri-apps/api/window";

@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu = MENU_ITEMS;

  constructor(private toastrService: NbToastrService) {}

  async ngOnInit() {
    const appData = await invoke("app_started");
    this.toastrService.success(appData, "Welcome!", { duration: 3000 });

    await appWindow.setDecorations(true);
  }
}
