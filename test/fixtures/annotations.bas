/* annotations */
/*@ Annotate ruleset */
@all {
  /*@ Annotate assertion */
  assertion: true;
  
  /*@ Annotate selector block */
  h1{
    /* Hey */
  }  
  
  /*@ Multiple annotations 1 */
  /*@ Multiple annotations 2 */
  h1{
    /* Hey */
  }  
  
  /*@ Multi line annotations 
    @ One line could not contain this! */
  h1{
    /* Hey */
  }  
  
    /* Comment above annotation */
  /*@ Annotation interspersed with comments 1 */
    /* Comment between */
  /*@ Annotation interspersed with comments 2 */
    /* Comment below */
  h1{
    /* Hey */
  }
  
}
