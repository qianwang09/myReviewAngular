import { Component } from '@angular/core'

@Component({
  selector: 'myReviewHeader',
  template: `
  <header class="pwcLogo">
    <div id="headerRight">
        <ul id="quickLink">
            <li><a href="javascript:void(window.open('https://janus2/Feedback/Home/Index?appcode=pwcrisk','_blank'));">My Feedback</a></li>
            <li>|</li>
            <li><a href="http://visionhelp/guide/" target="_blank">Help</a></li>
            <li>|</li>
            <li><a href="@Url.Action("LogOut")">Logout</a></li>
        </ul>
        <div id="welcomeMsg">Welcome, @Model.LoginStaffName [@(ViewData.Keys.Contains("CurrentUserRole") ? ViewBag.CurrentUserRole : "")]</div>
    </div>
    <div id="mainNav">
        <ul>
            <li><a href="http://vConcierge">vConcierge</a></li>
            <li><a href="#">Opportunity Identification</a></li>
            <li class="active"><a href="#">Acceptance &amp; Continuance</a></li>
            <li><a href="#">Team Identification</a></li>
            <li><a href="#">Engagement Management</a></li>
        </ul>
    </div>
</header>
  `,
 styleUrls: ['../assets/style/myReviewHeader.component.css']
})
export class MyReviewHeader{

}