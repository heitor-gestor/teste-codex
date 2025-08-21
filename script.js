diff --git a/style.css b/style.css
index 2f37f8fc13d8d1bd84fedadab167273fd187f327..6d4ae07700db54089b52a0fde394bcf6b5b76084 100644
--- a/style.css
+++ b/style.css
@@ -94,50 +94,75 @@ header .container {
   text-align: center;
   margin-bottom: 20px;
 }
 
 /* Cards */
 .cards {
   display: flex;
   gap: 20px;
   justify-content: center;
   flex-wrap: wrap;
 }
 
 .card {
   background: #f5f5f5;
   padding: 20px;
   border-radius: 8px;
   width: 300px;
   text-align: center;
   box-shadow: 0 2px 5px rgba(0,0,0,0.1);
 }
 
 .card h3 {
   margin-bottom: 10px;
 }
 
+/* Depoimentos */
+.testimonials {
+  display: flex;
+  gap: 20px;
+  justify-content: center;
+  flex-wrap: wrap;
+  margin-top: 20px;
+}
+
+.testimonial {
+  background: #f5f5f5;
+  padding: 20px;
+  border-radius: 8px;
+  width: 300px;
+  text-align: center;
+  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
+}
+
+.testimonial h3 {
+  margin-top: 15px;
+  font-weight: normal;
+  font-size: 16px;
+  color: #555;
+}
+
 /* Formulário */
 form {
   max-width: 500px;
   margin: auto;
   display: flex;
   flex-direction: column;
   gap: 15px;
 }
 
 form input, form textarea {
   padding: 12px;
   border: 1px solid #ccc;
   border-radius: 5px;
 }
 
 form button {
   border: none;
   cursor: pointer;
 }
 
 /* Rodapé */
 footer {
   background: #222;
   color: #fff;
   text-align: center;
