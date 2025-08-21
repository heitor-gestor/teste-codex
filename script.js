* {
  margin: 0; padding: 0; box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}
header {
  background: #222;
  padding: 15px 0;
}
.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
}
.logo {
  color: #fff;
  font-size: 24px;
}
.menu {
  list-style: none;
  display: flex;
  gap: 20px;
}
.menu a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
.menu a:hover {
  color: #25D366;
}
.hero {
  background: #00aaff;
  color: #fff;
  text-align: center;
  padding: 100px 20px;
}
.hero h2 {
  font-size: 32px;
  margin-bottom: 20px;
}
.btn-whatsapp {
  display: inline-block;
  padding: 14px 28px;
  background-color: #25D366;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.btn-whatsapp:hover {
  background-color: #1ebe5d;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}
.section {
  padding: 60px 0;
}
.section h2 {
  text-align: center;
  margin-bottom: 20px;
}
.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
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
footer {
  background: #222;
  color: #fff;
  text-align: center;
  padding: 20px;
}
footer a {
  color: #25D366;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
}

