document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenuWrapper = document.getElementById('mobile-menu-wrapper');
  const overlay = document.getElementById('overlay');

  menuButton.addEventListener('click', () => {
    mobileMenuWrapper.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0');
  });

  // This is the new event listener
  closeMenuButton.addEventListener('click', () => {
    mobileMenuWrapper.classList.add('translate-x-full');
    overlay.classList.add('opacity-0');
  });

  // You can also close the menu by clicking the overlay
  overlay.addEventListener('click', () => {
    mobileMenuWrapper.classList.add('translate-x-full');
    overlay.classList.add('opacity-0');
  });
});


// ---- contact form code-----

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  // Save data to Google Sheet
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.message
  ]);

  // Send email
  MailApp.sendEmail({
    to: "iamharishgowdaujire@gmail.com",  // replace with your email
    subject: "New Contact Form Submission",
    htmlBody: `
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Message:</b> ${data.message}</p>
    `
  });

  return ContentService.createTextOutput(
    JSON.stringify({ result: "success", data: data })
  ).setMimeType(ContentService.MimeType.JSON);
}
