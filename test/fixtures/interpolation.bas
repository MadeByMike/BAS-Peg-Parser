/* Interpolation */
@all {

  /* Interpolate attribute */
  $this [aria-describedby] {
    [id=$(attribute(aria-describedby))$] {
      /* Hey! */
    }
  }
  
  /* Interpolation in selector */
  $(attribute(aria-describedby))$ {
      /* Hey! */
  }


  /* Interpolation in assertions */
  h1 {
    text: shorter-than($(attribute(data-length))$);
  }
  
  header .description {
    text: $(attribute(data-description))$;
  }

}

