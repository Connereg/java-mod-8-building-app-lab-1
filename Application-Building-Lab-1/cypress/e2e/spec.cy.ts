import { Message } from "src/app/message.model"



describe('empty spec', () => {
  const appURL = "http://localhost:4200/"
  const testMessage = "Windstorm"


  it('passes', () => {
    let fakeReturnMessage: Message = {
      sender: {firstName: "Test", isOnline: false},
      text: 'Test Message',
      conversationId: 1,
      sequenceNumber: 2,
    }

    cy.visit(appURL);

    cy.contains("New Message").click();
    cy.url().should("include", "contactList");

    cy.contains("Start Message").click();
    cy.url().should("equal", appURL);

    cy.get("input[name=user-message-input]").type(testMessage);
    cy.contains("Send").click(); // Sending message by Clicking Send Button
    cy.get("app-conversation-thread-component").should("contain", testMessage); //Checking result of sent message

    cy.intercept(
      {
        method: 'DELETE',
        url: 'http://localhost:8080/api/delete-user-message/*'
      },
      (req) => {
        req.reply([fakeReturnMessage])
      }
    )

    cy.contains("Delete").click();
    cy.contains(fakeReturnMessage.text)

    })
})