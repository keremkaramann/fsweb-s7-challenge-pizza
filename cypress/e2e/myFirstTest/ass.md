cy.get("[data-cy='btn-medium']").should("be.visible").click({ force: true });
cy.get("[data-cy='select-hamur']").select("Orta");
cy.get("[data-cy='select-hamur']").should("have.value", "orta");

cy.get("[data-cy='order-note']")
.type("siparişi kapıya as")
.should("have.value", "siparişi kapıya as")

.type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
.type("{del}{selectall}{backspace}")

.type("{alt}{option}") //these are equivalent
.type("{ctrl}{control}") //these are equivalent
.type("{meta}{command}{cmd}") //these are equivalent
.type("{shift}")

.type("siparişimi acil getirin", { delay: 200 })
.should("have.value", "siparişimi acil getirin");
