describe("snapdeal application", () => {
  it("cart value", () => {
    cy.visit("https://www.snapdeal.com/");
    cy.url().should("include", "snapdeal.com/");
    cy.get(".sd-icon.sd-icon-cart-icon-white-2").should("have.text", 0);
    cy.get('[navindex="2"] > .menuLinks > .catText')
      .should("be.visible")
      .and("exist")
      .trigger("mouseover");
    //cy.get(".banner-link.bar>div:nth-child(4)").click()
    cy.get(":nth-child(6) > .product-card")
      .invoke("removeAttr", "target")
      .click();
    cy.get("#add-cart-button-id > .intialtext").click();
    cy.get(".cartQuantity").should("have.text", 1);
    cy.get(".col-xs-15 > .btn-theme-secondary").click();
    cy.get(".item-name")
      .should(
        "have.text",
        "Shiv Trishul Damru Gold-plated Locket with Rudraksha Mala" 
      )
      .and("be.visible");
    cy.get(".remove-item-shortlist").click();
    cy.get(".cart-heading > .icon-font-grey-size24 > .sd-icon").click();
    cy.get(".sd-icon.sd-icon-cart-icon-white-2").should("have.text", 0);
    cy.go("back");
    cy.get(".sd-icon.sd-icon-cart-icon-white-2")
      .invoke("text")
      .then((initialCount) => {
        const initialCartCount = parseInt(initialCount, 10);
        cy.get(":nth-child(6) > .product-card")
          .invoke("removeAttr", "target")
          .click({ force: true });
        cy.get("#add-cart-button-id > .intialtext").click();
        cy.go("back");
        cy.go("back");

        cy.get(":nth-child(7) > .product-card")
          .invoke("removeAttr", "target")
          .click({ force: true });
        cy.get(
          "#pdpFMCGBuyBlock > .add-to-cart > .buy-whole-block > .buy-block > #add-cart-button-id > span"
        ).click();
        cy.go("back");
        cy.go("back");
        cy.go("back");

        cy.get(":nth-child(8) > .product-card")
          .invoke("removeAttr", "target")
          .click({ force: true });
        cy.get("#add-cart-button-id > .intialtext").click();
        cy.go("back");
        cy.go("back");

        cy.get(".sd-icon.sd-icon-cart-icon-white-2")
          .invoke("text")
          .should("eq", (initialCartCount + 3).toString());
      });
  });
  it("should add products to the cart from the homepage and check cart count and remove the product and check the cart count", () => {
    cy.visit("https://www.snapdeal.com/");

    cy.get('.sd-icon.sd-icon-cart-icon-white-2')
    .invoke('text')
    .then((initialCartCountText) => {
      const initialCartCount = parseInt(initialCartCountText, 10);
      cy.log('Initial Cart Count: ', initialCartCount);
    })

    const numberOfProductsToAdd = 4;
    for (let i = 1; i <= numberOfProductsToAdd; i++) {
      cy.get(`:nth-child(${i}) > .product-card`)
        .invoke("removeAttr", "target")
        .click({multiple:true ,force: true });

      cy.wait(2000);

      cy.get("#add-cart-button-id").click();

      cy.wait(2000);

      cy.go("back");
      cy.wait(2000);
      cy.go("back");
      cy.wait(2000);
    }

    cy.get(".sd-icon.sd-icon-cart-icon-white-2")
      .should("not.be.empty")
      .then((cartCountElement) => {
        const cartCount = parseInt(cartCountElement.text(), 10);
        expect(cartCount).to.eq(numberOfProductsToAdd);
        cy.log(cartCount);
        cy.get(".cartInner > .sd-icon").click();
        cy.wait(3000);

        cy.get(":nth-child(1) > .clearfix > .remove-item-div").click();

        cy.get(".cart-heading > .icon-font-grey-size24 > .sd-icon").click();
        cy.get(".sd-icon.sd-icon-cart-icon-white-2")
          .should("not.be.empty")
          .then((updatedCartCountElement) => {
            const updatedCartCount = parseInt(
              updatedCartCountElement.text(),
              10
            );
            cy.log("Updated Cart Count:", updatedCartCount);
          });
      });
  });
  it("get the list items from the page and counts the list of element", () => {
    cy.visit("https://www.snapdeal.com/");
    cy.get('[navindex="2"] > .menuLinks > .catText')
      .trigger("mouseover")
      .click();
    cy.get("#category2Data>div:nth-child(1)>div>div>p>a").each(($data) => {
      cy.wrap($data).then(($value) => {
        cy.log($value.text());
      });
    });

    cy.get('[navindex="3"] > .menuLinks > .catText')
      .trigger("mouseover")
      .click();
    cy.get("#category3Data > div > div > div > p")
      .should("have.length.greaterThan", 0)
      .then((elements) => {
        const numberOfElements = elements.length;
        cy.log("Number of <p> elements: " + numberOfElements);

        cy.get("#category3Data > div > div > div > p a").each(($data) => {
          cy.wrap($data).then(($value) => {
            cy.log($value.text());
          });
        });

        cy.get('[navindex="4"] > .menuLinks > .catText')
          .trigger("mouseover")
          .click();
        cy.get("#category4Data > div > div > div > p")
          .should("have.length.greaterThan", 0)
          .then((elements) => {
            const numberOfElements = elements.length;
            cy.log("Number of <p> elements: " + numberOfElements);

            cy.get("#category4Data > div > div > div > p a").each(($data) => {
              cy.wrap($data).then(($value) => {
                cy.log($value.text());
              });
            });

            cy.get('[navindex="5"] > .menuLinks > .catText')
              .trigger("mouseover")
              .click();
            cy.get("#category5Data > div > div > div > p")
              .should("have.length.greaterThan", 0)
              .then((elements) => {
                const numberOfElements = elements.length;
                cy.log("Number of <p> elements: " + numberOfElements);

                cy.get("#category4Data > div > div > div > p a").each(
                  ($data) => {
                    cy.wrap($data).then(($value) => {
                      cy.log($value.text());
                    });
                  }
                );
              });
          });
      });
  });
  
    });
  
