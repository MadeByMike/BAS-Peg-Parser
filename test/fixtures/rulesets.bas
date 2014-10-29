/* Rulesets */

/* Page */
@page {

}

/* All */
@all{

}

/* Ruleset with condition */
@page (status-code = 200) {

}

/* Ruleset with mutiple conditions */
@page (content-type =~ /^text\/html/i) (status-code = 200) {


}

/* Without a ruleset (implied 'all') */

attribute: true;