 Mini-LWC-Project-Case-Manager-Serverside-with-Pagination
 
A lightweight Salesforce experience to display Cases with server-side pagination using Apex + LWC.
Real Use Case

Customer Service Agents often need to browse through thousands of support cases.
Loading them all at once is slow → so pagination is required.

Your mini project simulates this real scenario.

🎯 Project Goal

Build an LWC that:

✔️ Fetches Cases from Apex in chunks (server-side pagination)
✔️ Shows 10 records per page
✔️ Has “Next”, “Previous”, and page number display
✔️ Uses lightning-datatable for UI
✔️ Follows best practices (Apex SOQL + LIMIT/OFFSET)

🏗️ Project Structure
File	Purpose
casePagination.html	UI table + buttons
casePagination.js	JS logic for pagination
casePagination.js-meta.xml	Expose component
CasePaginationController.cls	Apex with LIMIT & OFFSET
Downloadable Dummy Case CSV (100 realistic Case records)/it is ready if case records are already has in org
Fields included (perfect for import):

Subject,Description,Status,Priority,Origin,Type,Reason

How Pagination Works (Simple Explanation)

1. Apex returns:
   - Total number of Case records  
   - A single page of data (10 records)

2. LWC calculates:
offset = (pageNumber - 1) * pageSize

3. When user clicks **Next**:
- pageNumber increases  
- new offset is calculated  
- next 10 Case records are fetched  

4. When user clicks **Previous**:
- pageNumber decreases  
- new offset is calculated  
- previous 10 records are fetched
  <img width="1366" height="646" alt="Screenshot (958)" src="https://github.com/user-attachments/assets/6f0a137c-c78f-4db2-9248-b1c88939202c" />
<img width="1366" height="605" alt="Screenshot (957)" src="https://github.com/user-attachments/assets/069102c6-0f3a-4399-8ca3-b9e0257f0c98" />
<img width="1366" height="621" alt="Screenshot (956)" src="https://github.com/user-attachments/assets/edfd2658-b556-4848-a982-61aa1c338aea" />

  
 Future Enhancements

✔ Add Search + Pagination
✔ Add Sorting
✔ Add Filters
✔ Add "Go to Page" input box
✔ Change LIMIT to Offset-based keyset pagination for large data
→
