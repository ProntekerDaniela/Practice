<template>
  <footer>
      <div class="row">
          <div class="col">
              <h3>Contact</h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24px" height="24px" class="icon1"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <a href="mailto:tokar@vs-com.net">
                tokar@vs-com.net
              </a>
              <br>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" fill="currentColor" width="370px" height="25px" class="icon2"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  
              <a href="tel:+380955588998">
                +38 (095) 55-88-998
              </a>
              <br>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="720px" height="24px" class="icon3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  
              <a href="https://vs-com.net/">
                vs-com.net
              </a>
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 2px solid #FBEEC1;
      margin-top: 2750px;
      padding: 2px;
      bottom: 0;
      left: 0;
}

.row {
    display: flex;
    flex-direction: row;
    column-gap: 32px;
}

.col {
    background-color: #DAAD86;
    border-radius: 5px;
    padding: 16px;
    min-width: 500px;
}
h3{
    text-align: center;
}
.icon2{
   margin-right: -180px;
  }
  .icon3{
    margin-right: -350px;
  }
</style>