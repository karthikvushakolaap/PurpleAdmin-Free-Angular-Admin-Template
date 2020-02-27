import { Project } from "./project";

export interface Employee { 
  id: number;
  name: String;
  email: String;
  designation: String;
  currentProject : Project;
  projectLead: Employee ;
  isActive: boolean ;
  isdisabledLogin: boolean;
  //occupiedAssets:  List<Asset> ;
}
