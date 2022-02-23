<script>
import CategoriesBar from "./components/CategoriesBar.svelte";
import Navbar from "./components/Navbar.svelte";
import Post from "./components/Post.svelte";
import Slider from "./components/Slider.svelte";
import Title from "./components/Title.svelte";
import VertialSlider from "./components/VertialSlider.svelte";
import VerticalPost from "./components/VerticalPost.svelte";


</script>

<main class="bg-primary bg-opacity-50 w-full flex flex-col py-12 px-8 md:px-24">
  
  <Navbar/>
  
  <div class="h-16"/>
  
  <Title center={true}>
    <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-text-primary uppercase">Today <span class="bg-highlight-pink">News</span></h1>
  </Title>

  <div class="h-14"/>
  
  <CategoriesBar/>

  <div class="h-16"/>

  <div class="flex-1 flex flex-col lg:flex-row">
    
    <div class="flex-1">
      <Title>
        <h1 class="text-xl md:text-2xl font-bold text-center text-text-primary uppercase">Popular News</h1>
      </Title>

      <Post/>
      <Post index={1}/>
      <div class="h-8"/>
      <Slider/>

    </div>

    <div class="lg:w-[1.6px] h-12 lg:h-auto lg:bg-secondary mx-8"/>

    <div class="flex-1">
      <Title>
        <h1 class="text-xl md:text-2xl font-bold text-center text-text-primary uppercase">Hot News</h1>
      </Title>

      <div class="flex relative">
        <VerticalPost/>
        <VertialSlider/>
      </div>
    </div>
  
  </div>

</main>
