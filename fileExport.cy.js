describe("file export functionality",()=>
{
    it("exporting the file",()=>
    {
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

        cy.downloadFile(
            "https://drive.google.com/uc?export=download&id=1g_y5MKMJrNSahMLre4_xBikoQJp_WoAc",
            "mydownloads",
            "downloaded_file.pdf"
        )

        // Parse and verify the content of the PDF file
        cy.task("parsePdf", { filePath: "mydownloads\\downloaded_file.pdf" }).then((pdfData) => {
            
            const normalizedText = pdfData.text.replace(/[\s]+/g, " ").trim();
            cy.log("PDF Content: ", normalizedText);
            
              
        });
    })
    it("downloading a file and reading a file",()=>
    {
        cy.visit("https://demo.automationtesting.in/FileDownload.html")
         
        cy.get("a[type='button']").click()

        cy.task("parsePdf", { filePath: "cypress\\downloads\\samplefile.pdf" }).then((pdfData) => {
            
            const normalizedText = pdfData.text.replace(/[\s]+/g, " ").trim();
            cy.log("PDF Content: ", normalizedText);
            
              
        });

        
    })
    it("downloadind pdf file ",()=>
    {
        cy.downloadFile(
            "https://drive.google.com/uc?export=download&id=1LpP4JJL1JO-o-DievuVb0FtTG81QV73x",

            "mydownloads",
            "downloaded_file.pdf"
        )
        //Parse and verify the content of the PDF file
        cy.task("parsePdf", { filePath: "mydownloads\\downloaded_file.pdf" }).then((pdfData) => {
            
            const normalizedText = pdfData.text.replace(/[\s]+/g, " ").trim();
            cy.log("PDF Content: ", normalizedText);
            
              
        });

        
    })
})