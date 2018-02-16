---
title: "[engaging page title]"
permalink: "/free-trial/"
layout: default
description: "[engaging description of page content]"
heading: "[engaging heading]"
subheading: "[engaging sub-heading]"
image:
  path: "/images/heros/desk-md.jpg"
  width: 1600
  height: 600
sitemap: false
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis dapibus dapibus.
{: .lead }

Pellentesque id felis convallis, malesuada turpis sed, aliquet erat. Nunc et felis vel odio maximus mollis. Etiam eget porta purus. Suspendisse massa quam, suscipit quis justo in, rutrum condimentum neque. Aenean at lorem ut arcu sagittis lacinia a quis nisi. Quisque dignissim velit at sapien luctus mollis vitae ut est. Suspendisse consequat porta quam. Suspendisse placerat ultricies enim, ut tincidunt nunc maximus non. Praesent ut dapibus ante, sed venenatis est. Suspendisse in finibus nisl. Proin eleifend metus risus, et ullamcorper augue pellentesque vel. Donec vitae tortor sodales diam consequat fringilla non eu tellus. Fusce sodales nisi sit amet nunc varius, in elementum ex ultrices.

### [call to action]
{: .text-center.col-md-6.mx-md-auto }

---
{: .text-center.col-md-1.mx-auto }

<form class="col-md-8 mx-md-auto" id="needs-validation" method="POST" action="https://formspree.io/{{ site.email }}" novalidate>
  <input type="hidden" name="_next" value="{{ site.url }}{{ site.baseurl }}/thanks/" />
  <div class="form-group">
    <label for="name">My name is:</label>
    <input type="text" class="form-control" id="name" name="name" placeholder="Full name" required>
    <div class="invalid-feedback">
      How will we know what to call you?
    </div>
  </div>
  <label for="email">You can get in touch with me by:</label>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="email" class="form-control" id="email" name="email" placeholder="Email address" required>
      <div class="invalid-feedback">
        We need to be able to get back to you somehow.
      </div>
    </div>
    <div class="form-group col-md-6">
      <input type="tel" class="form-control" id="tel" name="tel" placeholder="Phone number">
    </div>
  </div>

  <fieldset class="form-group">
    <legend>I'm looking for:</legend>
    <div class="custom-controls-stacked col-md-7 mx-md-auto">
      <label class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" name="aDesk">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">a desk</span>
      </label>

      <label class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" name="aStudio">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">a studio</span>
      </label>

      <label class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" name="aWorkshopSpace">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">a workshop space</span>
      </label>

      <label class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" name="aFunctionSpace">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">a function space</span>
      </label>

      <label class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" name="aMeetingRoom">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">a meeting room</span>
      </label>

      <label class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" name="somethingElse">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">something else (please elaborate below)</span>
      </label>
    </div>
  </fieldset>

  <div class="form-group">
    <label for="explanation">Let me explain&hellip;</label>
    <textarea class="form-control" id="explanation" name="explanation" rows="3"></textarea>
  </div>


  <div class="form-group">
    <label for="favouriteSucculent">My second favorite place to visit on the weekend is&hellip;</label>
    <textarea class="form-control" id="favouritePlaceToVisit" name="favouritePlaceToVisit" rows="3"></textarea>
  </div>

  <div class="text-center">
    <button type="submit" class="btn btn-primary">[call to action in the first person]</button>
  </div>
</form>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("needs-validation");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");
      }
    }, false);
  }, false);
}());
</script>
