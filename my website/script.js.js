function generateFrontPage() {
  const name = document.getElementById("studentName").value;
  const usn = document.getElementById("usn").value;
  const section = document.getElementById("section").value;
  const assignmentNo = document.getElementById("assignmentNo").value;
  const topic = document.getElementById("topic").value;
  const subject = document.getElementById("subject").value;
  const teacherName = document.getElementById("teacherName").value;
  const topicType = document.getElementById("topicType").value;
  const department = document.getElementById("department").value;
  if (subject.includes("Applied Physics")) {
    const frontPage = document.getElementById("frontPage");
    frontPage.innerHTML = `
    
    <div style="width: 210mm; height: 297mm; padding: 5mm; box-sizing: border-box; border: 2px solid black; font-family: 'Times New Roman', Times, serif;">
    <img src="https://i.postimg.cc/KvhJ6pCj/gm-logo.jpg" alt="GM University Logo" 
 style="position:absolute; top:50px; left:60px; width:130px; height:110px;" />
    <div style="text-align: center;">
      <div style="color: red;">
      <h3 style="margin: 0;">Srishyla Education Trust ®</h3>
<h1 style="font-size: 45px; margin: 5px 0;">GM UNIVERSITY</h1>
<p style="margin: 2px 0;">(Established under the Karnataka State Act No. 19 of 2023)</p>

</div>
<hr style="border: 1px solid black;"/>

        <h2 style="margin-top: 20px;
        color: black;">Department of Physics</h2>
        <h3 style="margin: 2px 0; display: inline-block; border-bottom: 2px solid black; padding-bottom: 5px;">Seminar-Group Discussion Report (Assignment-1)</h3>

<br>
<p style="margin: 10px 0; display: inline-block; border-bottom: 2px solid black; padding-bottom: 5px;"><strong>for</strong></p>
<br>

<h3 style="margin: 5px 0; display: inline-block; border-bottom: 2px solid black; padding-bottom: 5px;">Applied Physics for CSE (UE24CS1202)-2024-25</h3>

      </div>

      <br><br>
<table style="width: 100%; border: 1px solid black; border-collapse: collapse; font-size: 18px; text-align: center;">
  <tr>
    <th style="border: 1px solid black; height: 50px;">USN</th>
    <th style="border: 1px solid black; height: 50px;">Student Name</th>
    <th style="border: 1px solid black; height: 50px;">Signature</th>
  </tr>
  
  <tr>
    <td style="border: 1px solid black;text-transform: uppercase; height: 70px;">${usn}</td>
    <td style="border: 1px solid black; height: 70px;">${name}</td>
    <td style="border: 1px solid black; height: 70px;">&nbsp;</td>
  </tr>
</table>


<br><br>
      

      <div style="border: 1px solid #000; padding: 0; font-size: 18px; min-height: 80px; display: flex;">
  <div style="border-right: 1px solid #000; padding: 10px; min-width: 100px; font-weight: bold;">
    Topic :
  </div>
  <div style="padding: 10px; text-align: justify; flex: 1;">
    ${topic}
  </div>
</div>


      <br>

    <h3 style="display: inline-block; border-bottom: 2px solid black; padding-bottom: 5px; margin-bottom: 10px;">CO Mapping</h3>
      <table style="width: 100%; border: 1px solid #000; border-collapse: collapse; font-size: 18px; text-align: center; margin-bottom: 30px;">
  <tr>
    <th style="border: 1px solid #000; padding: 8px;">Assessment</th>
    <th style="border: 1px solid #000; padding: 8px;">CO4</th>
    <th style="border: 1px solid #000; padding: 8px;">CO5</th>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Seminar/Group Discussion</td>
    <td style="border: 1px solid #000; padding: 8px;"></td>
    <td style="border: 1px solid #000; padding: 8px;"></td>
  </tr>
</table>


      <h3 style="text-decoration: underline;">Assessment Marks</h3>

      <table style="width: 100%; border-collapse: collapse; font-size: 18px;">
        <tr>
          <th style="border: 1px solid #000; padding: 8px;">Assessment</th>
          <th style="border: 1px solid #000; padding: 8px;">Max. Marks</th>
          <th style="border: 1px solid #000; padding: 8px;">Obtained Marks</th>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">Seminar/Group Discussion</td>
          <td style="border: 1px solid #000; padding: 8px;">10</td>
          <td style="border: 1px solid #000; padding: 8px;"></td>
        </tr>
      </table>

      <br><br><br><br>
<br>
      <div style="text-align: right; font-size: 20px;">
        <strong>Course Coordinator</strong>
      </div>
    </div>
  `;
    frontPage.style.display = "block";
    document.getElementById("downloadButton").style.display = "inline-block";
    return;
  }

  const frontHTML = `
    <div style="
      width: 210mm;
      min-height: 297mm;
      padding: 30mm 20mm;
      font-family: 'Times New Roman', Times, serif;
      box-sizing: border-box;
      text-align: center;
      border: 2px solid black;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      background: white;
    ">
      <div>
        <h3 style="margin: 0;">Srishyla Educational Trust ®</h3>
        <h1 style="margin: 5px 0 10px; font-size: 60px; font-weight: bold;">GM UNIVERSITY</h1>
        <p style="margin: 0;">(Established under the Karnataka State Act No. 19 of 2023)</p>
        <p style="margin: 0;">Post Box No. 4, Davanagere - 577006</p>
        <div style="margin: 25px 0;">
          <img src="https://i.postimg.cc/KvhJ6pCj/gm-logo.jpg"
               alt="GM University Logo"
               style="max-width: 200px; height: auto;" />
        </div>
      </div>

     <div style="margin: 10px 0;">
  <h3 style="margin: 0; font-size: 29px;">
    ${subject.split("(")[0].trim()}
  </h3>
  <h4 style="margin: 5px 0 0; font-size: 20px; font-weight: bold;">
    (${subject.split("(")[1]?.replace(")", "").trim()})
  </h4>
  <h4 style="margin: 10px 0; font-size: 22px;">Assignment - ${assignmentNo}</h4>

        <p style="margin: 15px 0; font-size: 25px;
 text-align: justify; text-align: center;"><strong>${topicType}:</strong> ${topic}</p>
        <p style="margin: 20px 0 5px; font-size: 25px;"><strong>Section:</strong> '${section.toUpperCase()}'</p>
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 14px; margin-top: 120px;">
        <div style="text-align: left; font-size: 20px;">
          <strong>Submitted By:</strong><br>
          <strong>${name}<br>${usn.toUpperCase()}</strong>
        </div>
        <div style="text-align: left; font-size: 20px;">
  <strong>Submitted To:</strong><br>
  <strong>${teacherName}</strong><br>
  Department of ${department.toUpperCase()}<br>
  GM University<br>
  Davanagere
</div>

    </div>
  `;

  const frontPage = document.getElementById("frontPage");
  frontPage.innerHTML = frontHTML;
  frontPage.style.display = "block";
  document.getElementById("downloadButton").style.display = "inline-block";
}

async function downloadPdf() {
  const { jsPDF } = window.jspdf;
  const element = document.getElementById("frontPage");

  const canvas = await html2canvas(element, {
    useCORS: true,
    scale: 3,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  const yPosition = (pageHeight - imgHeight) / 2;

  pdf.addImage(imgData, "PNG", 0, yPosition, imgWidth, imgHeight);
  pdf.save("assignment_front_page.pdf");
}

