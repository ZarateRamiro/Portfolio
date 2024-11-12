import { contact } from "./contact";
import { Project } from "./Project";

export interface model {
 name:String;
 title:String;
 about:String;
 contact:contact;
 projects:Project;
}