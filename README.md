1. getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById("id") → একটাই element দেয় যার ID মিলে।

getElementsByClassName("class") → সব element দেয় একটা HTMLCollection হিসেবে।

querySelector("selector") → প্রথম matching element দেয় (CSS selector ব্যবহার করে)।

querySelectorAll("selector") → সব matching element দেয় NodeList হিসেবে।


2. DOM-এ নতুন element তৈরি ও insert করা

const div = document.createElement("div"); // নতুন div তৈরি
div.textContent = "Hello World";            // content যোগ করা
document.body.appendChild(div);             // DOM-এ append করা



3. Event Bubbling

যখন কোনো element-এ event হয়, সেটা child → parent → ancestor ক্রমে propagate হয়।

উদাহরণ: button click → div → body → document।



4. Event Delegation

Parent element-এ event listener লাগানো হয়, child elements-এর জন্য।

কারণ: DOM পরিবর্তনের পরও নতুন element-এর events কাজ করবে।

সুবিধা: কম memory ব্যবহার, dynamic elements-এর জন্য সহজ।



5. preventDefault() vs stopPropagation()

preventDefault() → browser-এর default action prevent করে (যেমন form submit, link follow)।

stopPropagation() → event bubbling বা capturing stop করে।
