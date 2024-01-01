"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,u=c["".concat(s,".").concat(m)]||c[m]||h[m]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={title:"kicad-project-template",sidebar_position:2,slug:"/kicad-project-template",draft:!1,keywords:["kicad","oshw","hardware","kicad","foss","cicd","ci","cd"],description:"KiCAD project template w/ CI/CD and standard stackup board settings"},r=void 0,l={unversionedId:"templates/kicad-project-template/kicad-project-template",id:"templates/kicad-project-template/kicad-project-template",title:"kicad-project-template",description:"KiCAD project template w/ CI/CD and standard stackup board settings",source:"@site/docs/templates/kicad-project-template/kicad-project-template.mdx",sourceDirName:"templates/kicad-project-template",slug:"/kicad-project-template",permalink:"/docs/kicad-project-template",draft:!1,editUrl:"https://github.com/everyday-dev/opensource/tree/main/docs/templates/kicad-project-template/kicad-project-template.mdx",tags:[],version:"current",lastUpdatedBy:"stephendpmurphy",lastUpdatedAt:1687811009,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:2,frontMatter:{title:"kicad-project-template",sidebar_position:2,slug:"/kicad-project-template",draft:!1,keywords:["kicad","oshw","hardware","kicad","foss","cicd","ci","cd"],description:"KiCAD project template w/ CI/CD and standard stackup board settings"},sidebar:"sidebar",previous:{title:"avr-cmake-template",permalink:"/docs/avr-cmake-template"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"File naming",id:"file-naming",level:3},{value:"Page settings",id:"page-settings",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:2},{value:"Adding the MFP field",id:"adding-the-mfp-field",level:3},{value:"Generating BOMs",id:"generating-boms",level:3},{value:"3D Models",id:"3d-models",level:2},{value:"Github Releases",id:"github-releases",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Manual Release",id:"manual-release",level:3},{value:"Release on Push",id:"release-on-push",level:3}],p={toc:d},c="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The KiCAD project template is great for getting up and going quickly on your KiCAD PCB projects and cuts out the repeated setup you'd normally have to run through. The default board stackup\nfollows the PCBWay standard stackup with the smallest design tolerances possible - giving you the most accomodating design experience possible without costing too much for fabrication.\nThis template also has the necessary scripts and workflow files for automated releases (CI/CD) on Github where it will generate your BOM, .step, Gerbers and Schematic for you and automatically upload\nthese to a Release that has been tagged with your boards Revision."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The template can be found on Github in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/everyday-dev/kicad-project-template"},"kicad-project-template")," repository")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To make the template your own you will need to update the name of a few files and edit schematic sheet settings. Each step is outlined below."),(0,i.kt)("h3",{id:"file-naming"},"File naming"),(0,i.kt)("p",null,"The first step is to update file names. Inside the template\nis a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"kicad-project-template"),". Update the name to be your desired project name (e.g. EX_PROJECT). Next you need to update the ",(0,i.kt)("inlineCode",{parentName:"p"},".kicad_pro"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".kicad_sch")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".kicad_pcb"),"\nfiles found inside the project folder we just renamed. Rename all three files to be the same as the folder name (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"EX_PROJECT.kicad_pro"),"). With all of these file names updated you should\nnow be able to open the project in KiCAD and see both the Schematic and PCB Documents."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KiCAD project viewer with the EX_PROJECT open",src:n(7632).Z,width:"964",height:"654"})),(0,i.kt)("h3",{id:"page-settings"},"Page settings"),(0,i.kt)("p",null,"Next we need to update Schematic and PCB page settings. Several variables are already set such as a company name, license type, revision etc. and these show up in the title block in the bottom right of the schematic\nand pcb sheets. These settings are updated by opening the ",(0,i.kt)("inlineCode",{parentName:"p"},"EX_PROJECT.kicad_sch")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"EX_PROJECT.kicad_pcb")," file and then navigating to ",(0,i.kt)("inlineCode",{parentName:"p"},"File > Page Settings"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KiCAD sheet settings for the EX_PROJECT",src:n(8155).Z,width:"922",height:"761"})),(0,i.kt)("h2",{id:"bill-of-materials"},"Bill of Materials"),(0,i.kt)("p",null,"There are several ways to generate a BOM in KiCAD but we will be using our own custom python script to generate ours. A ",(0,i.kt)("inlineCode",{parentName:"p"},"util/")," folder is included in the template with a handful of helper scripts used for parsing the\nXML based netlist generated by KiCAD. These scripts provided functions and classes called by our ",(0,i.kt)("inlineCode",{parentName:"p"},"bom_csv_grouped_by_mfp.py"),' script which generates a comma separated BOM with the line items grouped by the MFP\n(Manufacturer Part Number) field. Some components like ICs will have a MFP in the "Value" field but other items such as generic LED and passive symbols have no actual MFP associated with them. When trying to share and order\nfrom these generated BOMs the intended components to be used are not captured. KiCAD does not know about or include an MFP field on it\'s components but we can add it!'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can skip adding the MFP if you'd like and the included script in ",(0,i.kt)("inlineCode",{parentName:"p"},"util/")," will still generate a useful BOM with parts grouped by Name, Footprint and Value.")),(0,i.kt)("h3",{id:"adding-the-mfp-field"},"Adding the MFP field"),(0,i.kt)("p",null,"As previously mentioned the MFP field is not present in KiCAD provided components and must be manually added. It can be tedious at first but greatly improves the usability of the final BOM. The MFP field can be added to any\npart by selecting the component in the schematic, pressing ",(0,i.kt)("kbd",null,"E"),", and then adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"MFP")," field name and part number value."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KiCAD symbol settings for the EX_PROJECT",src:n(6983).Z,width:"1042",height:"595"})),(0,i.kt)("h3",{id:"generating-boms"},"Generating BOMs"),(0,i.kt)("p",null,"To load and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"bom_csv_grouped_by_mfp.py")," script, open the PCB file and go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Tools > Generate BOM..."),". From here there will be a couple scripts already loaded and you are welcome to use those if they meet your needs.\nTo use our template script click the ",(0,i.kt)("kbd",null,"+")," in the bottom left of the BOM generator scripts pane to load a new BOM Generator. Navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"util/")," folder and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"bom_csv_grouped_by_mfp.py")," script.\nOnce loaded, press ",(0,i.kt)("kbd",null,"Generate")," in the bottom-right of the window. You should now have a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"EX_PROJECT.csv")," inside the\n",(0,i.kt)("inlineCode",{parentName:"p"},"EX_PROJECT/")," folder - that's your BOM!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KiCAD BOM script generator selector",src:n(1077).Z,width:"823",height:"456"})),(0,i.kt)("h2",{id:"3d-models"},"3D Models"),(0,i.kt)("p",null,"In some cases you will use a component that does not have a 3D model built-in to KiCAD. You can place these ",(0,i.kt)("inlineCode",{parentName:"p"},".step")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".wrl")," files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"models/")," folder.\nTo reference them you can use the KiCAD Project variable (",(0,i.kt)("inlineCode",{parentName:"p"},"KIPROJMOD"),") to set a relative path to these models when updating the pcb component properties by selecting in the PCB doc,\npressing ",(0,i.kt)("kbd",null,"E"),", and then adding a new file path for your model. Ex. ",(0,i.kt)("inlineCode",{parentName:"p"},"${KIPRJMOD}/../models/EXAMPLE_MODEL.step")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KiCAD footprint settings for the EX_PROJECT",src:n(4236).Z,width:"852",height:"226"})),(0,i.kt)("h2",{id:"github-releases"},"Github Releases"),(0,i.kt)("p",null,"The template has a preloaded workflow for use with Github runners which allows a consistent and hands-free release process for generating a release BOM, Schematic, Gerbers, and ",(0,i.kt)("inlineCode",{parentName:"p"},".step")," file. The integration is triggered\nin two ways - either manually kicking off the action from the Github Web UI (this is default behavior) or it's triggered on pushes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch.\nBoth options are explained in further detail below. The release will be tagged and named whatever is set as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Revision")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"EX_PROEJCT.kicad_sch")," page settings. When making releases you MUST change/increment\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"Revision")," value or delete any old releases/tags that might have the same name, otherwise the workflow will fail."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The workflow is configured by editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"ci.yml")," file located in ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/"),". At a minimum we need to update the project name env variable to match the folder and file renaming\nwe did previously (",(0,i.kt)("inlineCode",{parentName:"p"},"EX_PROJECT"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'env:\n  PROJECT_NAME: "EX_PROJECT"\n')),(0,i.kt)("p",null,"Lastly we need to configure the CLI tool. As of KiCAD v7 the the ",(0,i.kt)("inlineCode",{parentName:"p"},"kicad-cli")," utility was added allowing the generation of KiCAD build outputs from the command line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'CLI_TOOL: "kicad-cli"\n')),(0,i.kt)("h3",{id:"manual-release"},"Manual Release"),(0,i.kt)("p",null,"The default setup of the workflow is for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow"},"manually triggering of a release from the Github Web UI"),". The configuration at the top\nof the ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/ci.yml")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"workflow_displatch")," to enable this feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"on:\n  # Enable workflow only when manually called\n  workflow_dispatch\n  # OR\n  # Enable workflow on pushes to main and dev\n  # push:\n    # branches: [ main, dev ]\n")),(0,i.kt)("h3",{id:"release-on-push"},"Release on Push"),(0,i.kt)("p",null,"The second option for Github releases is to create a new relase on ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," to main. Meaning any commit on the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch will create a new release. If you intend to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"on push"),"\nmethod and want to make multiple incremental changes/pushes to your design it's recommended you work out of a ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," branch and then PR the changes into ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," when you are ready to make a release.\nTo enable the 'Release on Push' functionality we need to edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"ci.yml")," and uncomment the ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"branches")," lines. Comment out the ",(0,i.kt)("inlineCode",{parentName:"p"},"workflow_dispatch")," line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"on:\n  # Enable workflow only when manually called\n  #workflow_dispatch\n  # OR\n  # Enable workflow on pushes to main\n  push:\n    branches: [ main ]\n")))}h.isMDXComponent=!0},1077:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kicad-bom-script-ac6d9a99c69b2c4666d610d9c902bfcd.png"},4236:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kicad-footprint-props-34e6bf210f5ae236df66b2bdf003ad53.png"},7632:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kicad-proj-viewer-5a0d67dd14e44f172479dcb2b2d3dfed.png"},8155:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kicad-sheet-settings-80f00218f6a6d14b9d8e3fabb4973200.png"},6983:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kicad-symbol-props-4f619b676c65af1fac2a831dee19e261.png"}}]);