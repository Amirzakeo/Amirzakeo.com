\]\]

| AmirHossein Gholami Lead Technical Artist With over 11 years of experience in design, motion graphics and technical art, I specialize in crafting procedural content and creating efficient tools that empower teams to deliver high-quality projects. As a Lead Technical Artist, I build scalable workflows and real-time environments in Unreal Engine while also guiding and mentoring cross-functional teams to deliver ambitious creative visions. My expertise spans shader programming, real-time VFX, and tool development, blending technical precision with artistic direction. I'm passionate about fostering collaboration across disciplines, aligning art and engineering, and helping teams thrive. By leveraging Unreal Engine, Python, and HLSL, I aim to create visually stunning, optimized environments that push the boundaries of interactive experiences. With a background in marketing, and IT, I bring a versatile skill set that enhances both production and leadership impact. WORK EXPERIENCE  Lead Technical Artist                                              June 2023 – Present AILiveSim ,Helsinki Leading a cross-functional team of 3–6 technical artists, owning the development and maintenance of scalable art pipelines and real-time workflows in Unreal Engine 5\. Driving creation of custom tools and automation scripts using Python and Editor Utility Widgets to optimize level building, asset management, and material workflows. Planning and designing procedural content pipelines, ensuring modularity, efficiency, and artist-friendly toolsets. Establishing and documenting best practices for performance optimization, shader development, and debugging complex visual issues. Mentoring technical artists and providing technical direction to align team output with visual, gameplay, and production goals. Contributed to the design and implementation of large-scale levels in Unreal Engine, ensuring performance, modularity, and visual fidelity. Acted as a bridge between tech and art teams, streamlining collaboration and integrating real-time assets efficiently. Senior 3D Artist                                                        May 2022 – November 2022 Hasin Group ,Tehran  Design creative for marketing purposes Produced 2D and 3D motion graphics and illustrations for implementation in mobile application UI (in app guidelines ,tutorials and onboarding video) Format optimization for efficient use in mobile devices and web (lottie library) Modeling ,texturing ,animating different assets (Cinema 4D, substance painter, blender Lead 3D Motion Designer                                September 2020 – April 2022 Wallex exchange ,Tehran  Led a team of 5–6 artists, overseeing the full production pipeline of 2D and 3D motion graphics for marketing campaigns. Directed and created 2D and 3D motion graphic projects for the marketing team (Adobe After effects / Illustrator / Blender / Cinema 4D / Octane) Generated brand awareness with top quality motion design Collaborated in brainstorm sessions / creating campaign ideas and promoting products Look development / Rendering and compositing 3D motion graphics  (Cinema 4D / Octane /After effects) Motion Designer                                                 September 2018 – May 2020 Jeanswest ,Tehran  Illustrated and animated 2D motion design projects for video walls located in \+40 stores across the country and social media advertising Cooperated with a team of 7 designer to implement printing design theme in video production Generated more than 500k views across social media over 3 years of consistent production Collaborated in brainstorm sessions / suggesting campaign ideas which resulted in generating new customers and brand awareness | CONTACT  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Helsinki ,Finland \+358 40 588 7919 [amirhoseinghs.94@gmail.com](mailto:amirhoseinghs.94@gmail.com) [linkedin.com/in/amirhosseingholami](https://fi.linkedin.com/in/amirhosseingholami) 3D Reel: [vimeo.com/789428774](http://vimeo.com/789428774) [behance.net/amirzakeo](http://www.behance.net/amirzakeo) SKILLS  Creative & Personal Originality & Creativity Conceptual Thinking Adaptiveness & Self-Motivation Prioritization & Communication Team Leadership & Mentorship Technical Shader Programming (HLSL, Unreal Material Graph) Procedural Content Generation (PCG, Blender) VFX Systems (Niagara, Embergen) Pipeline Design & Optimization Performance Profiling (Unreal Engine toolset) UI/UX Systems & Design Animation Systems & Game-Design Fundamentals Software / Plugins Unreal Engine Python Cinema 4D Blender Unity Adobe After Effects Adobe Illustrator Figma Adobe Photoshop Substance 3D painter Embergen X-particles World Creator Marvelous Designer Gaea Houdini HLSL/GLSL C++ EDUCATION  Bachelor of Arts  Major in Digital Arts Tehran ,Iran — 2018  Bachelor's degree Major in Computer Science Tehran ,Iran — 2015 REEL  3D Reel 2023: [vimeo.com/789428774](http://vimeo.com/789428774) [behance.net/amirzakeo](http://www.behance.net/amirzakeo) 2D Reel 2022: [vimeo.com/808858494](https://vimeo.com/808858494) |
| :---- | :---- |
| **3D Motion Designer**                                                                    2017 – 2022 Freelancer  Produce NFT projects for clients around the world Learn Unreal Engine and Houdini for real-time VFX and terrain generation in the game and cinematic industry. **Graphic Designer & Junior Motion Designer**                         2017 – 2018                                     Seyagh Software ,Tehran **Graphic Designer**                                                                        2015 – 2017                                     Mohitara ,Tehran |   |

# **NOTABLE WORKS IN LAST 3 YEARS**

**Core Development & Systems**

* Upgrade from Unreal Engine 4 to Unreal Engine 5  
* Spreadable Volumetric fire and smoke placer with Niagara  
* Open World Boat splash system with Niagara (R\&D on NDC / NDI \- Accurate water interaction based on static meshes vertices )  
* R\&D on use of GIS spatial data in Unreal Engine (Focus on Google 3D tiles and Cesium)  
* Complete sensor-based weather system with Niagara (replicated and working with scene captures)  
* Density-based lightning system with Niagara (replicated- with control in the UI )   
* Implementation of seeking logic for in-game missiles with Blueprints  
* R\&D on BSDF shaders and spectral rendering in Unreal Engine  
* Implementation of many object placers with different logics in Blueprints for runtime usage  
* Implementation of import pipeline and later conversion to interchange pipeline:  
  * Material instance creation  
  * Texture optimization  
  * Folder structure and naming convention  
  * Triangle count check  
  * Material index check  
* Implementation of several digital twins of real world locations (World Partition levels)

**Editor Tools**

* **Actor Action Utility:**  
  * **Convert Static Meshes to Instanced Static Mesh:** Converts multiple similar static mesh actors to a single instanced static mesh actor for performance optimization.  
  * **Convert Instanced Static Mesh to Static Mesh:** Reverts instanced static mesh actors back to individual static meshes.  
  * **Organize Actors in a Level:** Arranges actors in a grid or row for debugging.  
  * **Get Stats:** Provides custom statistics from actors in a level (e.g., number of unique static meshes, unique materials, material count, static mesh count).  
  * **Create Spline Around Static Meshes:** Generates a spline around static mesh actors by converting them to dynamic meshes, computing their convex hull, and sorting vertex positions.  
  * **Recompile Materials and Textures:** Addresses Unreal Engine 5.5 black texture issues by recompiling dependent textures and material parents.  
* **Asset Action Utility:**  
  * **Get References and Dependencies:** Recursively retrieves all dependencies and referencers of a selected asset, enabling custom logic, such as moving assets with dependencies to another plugin or generating usage reports.  
  * **Change Material (Complex Tool):** Automates the process of reparenting materials to standardized candidate materials. This tool:  
    * Checks material referencers and dependencies to detect unused/null materials.  
    * Traverses material graphs to gather information (textures, texture parameters, vectors, floats, material expressions).  
    * Considers material domain and blend mode to automatically reparent or create material instances. This tool was used to reparent or create instances for over 46,000 materials.  
  * **Create Blueprint From Static Mesh:** Creates blueprints from static meshes and adds necessary components.  
* **Editor Utility Widget:**  
  * **Pivot Pointer:** Changes the pivot point of a static mesh (27 possible positions) while maintaining the transform of already placed static meshes in levels. transform correction for instanced static mesh/StaticMesh.

**Shaders/Materials:**   
Fire shader  
Emissive Material Billboard in Material graph for \+10k concurrent light on screen   
Custom volumetric cloud in material graph custom node   
Volumetric Fog  
Procedural HeightBased Dirt   
Base master materials for Basic Props, translucent, masked materials for \+4000 assets  
Snow Coverage   
Rain droplet Shader  
Rain Ripples shader  
Rain splashes  
Snow Shader  
SkySphere material  
Procedural Landscape Material   
Volumetric Cloud material  
PostProcess materials :   
	HeatHaze  
	Outline objects  
	Custom stencil based materials for camera effects  
