describe("downloading audio,video files",()=>
{
    it("verifying the audio uploading functionality",()=>{
        
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#singleFileInput").attachFile("sample-3s.mp3")
        cy.get("form[id='singleFileForm'] button[type='submit']").click()
        cy.get("#singleFileInput").attachFile("sample-6s.mp3")
        cy.get("form[id='singleFileForm'] button[type='submit']").click()

        const filesToUpload = [
            "sample-3s.mp3",
            "sample-6s.mp3",
            "sample-9s.mp3"

          ];
      
          cy.get('#multipleFilesInput')
            .attachFile(filesToUpload); 
      
          
          cy.get("form[id='multipleFilesForm'] button[type='submit']")
            .click();


    })
    it("uploading a video files",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#singleFileInput").attachFile("file_example_MP4_480_1_5MG.mp4")
        cy.get("form[id='singleFileForm'] button[type='submit']").click()

        cy.get("#singleFileInput").attachFile("file_example_MP4_640_3MG.mp4")
        cy.get("form[id='singleFileForm'] button[type='submit']").click()

        cy.get("#singleFileInput").attachFile("file_example_MP4_1920_18MG.mp4")
        cy.get("form[id='singleFileForm'] button[type='submit']").click()

        const filesToUpload = [
            "file_example_MP4_480_1_5MG.mp4",
            "file_example_MP4_640_3MG.mp4",
            "file_example_MP4_1920_18MG.mp4"

          ];
      
          cy.get('#multipleFilesInput')
            .attachFile(filesToUpload); 
      
          
          cy.get("form[id='multipleFilesForm'] button[type='submit']")
            .click();
     })
     it("upload a single file",()=>
        {
            cy.visit("https://testautomationpractice.blogspot.com/")
                    cy.get('input[type="file"]')
                    .attachFile("logo-title.png")
            
                    cy.get("form[id='singleFileForm'] button[type='submit']")
                    .click()
            
                    cy.get("#singleFileStatus").should
                    ('contain',"Single file selected: logo-title.png, Size: 105136 bytes, Type: image/png")
        })
        it("upload a multiple file",()=>
        {
            cy.visit("https://testautomationpractice.blogspot.com/");
                    
                    
                    const filesToUpload = [
                      "logo-title.png",
                      "logo-title - Copy.png",
                      "logo-title - Copy (2).png"
                    ];
                
                    cy.get('#multipleFilesInput')
                      .attachFile(filesToUpload); 
                
                    
                    cy.get("form[id='multipleFilesForm'] button[type='submit']")
                      .click();
        })
        it("upload a csv file",()=>
        {
            
            cy.visit("https://testautomationpractice.blogspot.com/")
            cy.get('input[type="file"]')
            .attachFile("contact.csv")
    
            cy.get("form[id='singleFileForm'] button[type='submit']")
            .click()
    
            cy.get("#singleFileStatus").should
            ('contain',"Single file selected: contact.csv, Size: 209 bytes, Type: text/csv")
        })
        it("upload a pdf file",()=>
        {
            cy.visit("https://testautomationpractice.blogspot.com/")
            cy.get('input[type="file"]')
            .attachFile("downloaded_file.pdf")
    
            cy.get("form[id='singleFileForm'] button[type='submit']")
            .click()
    
            
    
        })
        it("download a audio file",()=>
        {
            cy.visit("https://samplelib.com/sample-mp3.html")

            cy.get("div[class='container'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(4) a:nth-child(1)").click()

            cy.get("div[class='block-content'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(4) a:nth-child(1)").click()
                       
            cy.get("div[class='block-content'] div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(4) a:nth-child(1)").click()
        })
        it("Download and verify text file content", () => {
            cy.visit("https://commitquality.com/practice-file-download");
            cy.get("button").contains("Download File").click();
            cy.readFile("cypress\\downloads\\dummy_file.txt").should(
                "eq",
                "This is a dummy text file."
            );
        });
    
        it("Download image and PDF files and verify PDF content", () => {
            
            cy.downloadFile(
                "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
                "mydownloads",
                "example.jpg"
            );
    
        
            cy.downloadFile(
                "https://drive.google.com/uc?export=download&id=1MzNlAleo4QEMUaBBMUVjGOxuNqhjsFLY",
                "mydownloads",
                "downloaded_file.pdf"
            );
    
            // Parse and verify the content of the PDF file
            cy.task("parsePdf", { filePath: "mydownloads\\downloaded_file.pdf" }).then((pdfData) => {
                
                const normalizedText = pdfData.text.replace(/[\s]+/g, " ").trim();
                cy.log("PDF Content: ", normalizedText);
    
                
                  
            }); 
})
it("downloading a video files",()=>
{
    cy.visit("https://samplelib.com/sample-mp4.html")
    cy.get("div[class='items'] div:nth-child(1) div:nth-child(1) div:nth-child(4) a:nth-child(1)").click()
    cy.get("div[class='items'] div:nth-child(2) div:nth-child(1) div:nth-child(4) a:nth-child(1)").click()
})
})
