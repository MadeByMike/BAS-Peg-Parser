/* Nested selectors */
@all {
  
  /* simple */
  .simple {
    /* Hey! */
  }  
  
  /* psudo */
  :psudo {
    /* Hey! */
  }
  
  .element:psudo:psudo {
    /* Hey! */
  }

  /* multi */
  .multi,
  .selectors {
    /* Hey! */
  }
 
  /* complex */
  .complex-selectors > #complex[attr] + .end {
    /* Hey! */
  }

  /* nested */
  h2 {
    h1{
      /* Hey! */
    }
  }
  
  #content {
    $this b {
      /* Hey! */
    }
   }
   
  .content header {
      $node h3 {
        /* Hey! */
      }
  }
  
}