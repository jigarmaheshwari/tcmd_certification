/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Using Modules in your Apps",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "Using Modules in your Apps",
		"%l_slidenote_titleslide": "<b>Module time: 30 mins</b><br/>(15 mins teaching, 20 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Titanium Modules Overview",
		"%l_agenda2": "Module Install",
		"%l_agenda3": "Lab &mdash; Adding a Module to a Project",
		"%l_slidenote_agenda": "You'll explore a few of the free modules available to community-level developers, as well as cover how to add a module to your project.",

		"%l_what_ti_plus": "Titanium Modules",
		"%l_ti_plus_image": "<img src='images/ti-plus.png' style='margin-top:5px;height:300px;float:right;'/>",
		"%l_val_add": "Add 'missing' features",
		"%l_narrow_use": "Narrow use cases",
		"%l_created": "Appcelerator &amp; Community created",
		"%l_slidenote_ti_plus": "<ul><li>Add features to Titanium not included in the core distribution</li><li>Typically narrowly focused on adding a specific feature, rather than a broad API addition</li><li>Some written by Appcelerator, others by the community. Available in a wide range of prices</li></ul>",

		"%l_plus_access": "Module Distribution",
		"%l_licenses": "Variety of licensing options",
		"%l_distr_thru": "Distributed through Marketplace",
		"%l_helpdesk": "'Official' Modules Distributed through Helpdesk",
		"%l_otherdistro": "Also, GitHub, Blogs, etc.",
		"%l_slidenote_plus_access": "Variety of distribution methods are used. Modules can be sold or distributed via marketplace.appcelerator.com. Open-source and unofficial modules are often distributed by their authors via GitHub, blogs, and so forth.",

		"%l_mod_overview": "Module Quick-Tour",
		"%l_slidenote_mod_overview": "A quick look at some of the available modules",
		
		"%l_urban_airship": "Urban Airship (iOS and Android)",
		"%l_ti_urban_image": "<img src='images/urban-airship.png' style='margin-top:5px;height:300px;float:right;'/>",
		"%l_push_not": "Push notifications service",
		"%l_client_side": "Titanium deals with the client side only",
		"%l_server_side": "Urban Airship provides help for the server side, but much of that work is up to you",
		"%l_slidenote_urban_airship": "",
		
		"%l_paypal": "PayPal (iOS and Android)",
		"%l_paypal_image": "<img src='images/paypal.png' style='margin-top:5px;height:200px;float:right;'/>",
		"%l_mob_payments": "Mobile Payments Library",
		"%l_merchant": "Requires PayPal merchant account",
		"%l_dev": "In development, uses sandbox environment, in production uses live servers",
		"%l_slidenote_paypal": "Useful for physical purchases or donations<br>Can�t be used for ebooks, unlocking app features, etc. because those uses would run afoul of Apple�s StoreKit rules",

		"%l_bump": "Bump",
		"%l_bump_image": "<img src='images/bump.png' style='margin-top:5px;height:350px;float:right;'/>",
		"%l_dev_to_dev": "Device to device communication",
		"%l_wifi": "Works over wifi",
		"%l_geoloc": "Uses geolocation and requires close proximity",
		"%l_bump_api": "Requires Bump API key set",
		"%l_slidenote_bump": "Have to register for an API key with Bump",
		
		"%l_sms": "SMS (iOS)",
		"%l_sms_image": "<img src='images/sms.png' style='margin-top:5px;height:200px;float:right;'/>",
		"%l_prep_sms": "Prepare SMS text messages in app",
		"%l_code": "Cannot send via code",
		"%l_enhanced": "Enhanced functionality over launching the SMS app",
		"%l_slidenote_sms": "",
		
		"%l_tv_out": "TV Out (iOS)",
		"%l_tv_out_image": "<img src='images/tv-out.png' style='margin-top:5px;height:350px;'/>",
		"%l_display_app": "Display app contents on TV screen with additional cable",
		"%l_test_scaling": "Test scaling on TV screen, will vary in quality",
		"%l_slidenote_tv_out": "",
		
		"%l_storekit": "StoreKit (iOS)",
		"%l_storekit_image": "<img src='images/storekit.png' style='margin-top:5px;height:200px;float:right;'/>",
		"%l_in_app": "In App Purchase API",
		"%l_itunes_conn": "Requires set up through iTunes Connect portal",
		"%l_on_dev": "Can only be tested on device",
		"%l_apple_docs": "Will need to follow Apple docs for user and item creation",
		"%l_slidenote_storekit": "Tied to your iTunes account which is why you have to test on device (that linkage isn�t available in the simulator)",
		
		"%l_magtek": "Magtek Credit Card Reader (iOS)",
		"%l_magtek_image": "<img src='images/magtek.png' style='margin-top:5px;height:200px;float:right;'/>",
		"%l_interface": "Interface to Magtek hardware",
		"%l_can_process": "Can process card payments",
		"%l_add_acc": "Requires additional account setup for payments",
		"%l_peripheral": "Can only be tested on device with peripheral",
		"%l_slidenote_magtek": "",
		
		"%l_more_come": "Many More!",
		"%l_more_img": "<img src='images/marketplace.png' style='width:550px;'/>",
		"%l_slidenote_more_come": "Appc has a dedicated module development team now, so this offering will continue to grow",
		
		"%l_install_mod": "Installing Modules",
		"%l_install_options": "Two install options: for single project or all projects",
		"%l_install_single": "Install for single project:",
		"%l_install1": "Download zip file",
		"%l_install2": "Place in project's root directory",
		"%l_install3": "Build once &mdash; to unzip and create necessary folders",
		"%l_install4": "Add to tiapp.xml and JavaScript",
		"%l_slidenote_install_mod": "Installing for all projects doesn't add overhead to your projects, so is probably the best option. We'll cover how to update tiapp.xml and JavaScript on an upcoming slide.",

		"%l_install_all": "Installing Modules, Continued",
		"%l_installall": "Install for all projects:",
		"%l_installall1": "Download zip file",
		"%l_installall2": "Unzip to %TITANIUM_INSTALL_DIR%/modules directory",
		"%l_installall3": "Add to tiapp.xml and JavaScript",
		"%l_slidenote_installall": "Any future projects you develop on this computer would then be able to use the module.<br/><br/>The Titanium install directory varies by platform and operating system version. For example, on OS X Lion, it would be ~/Library/Application Support/Titanium.",

		"%l_implementmodule": "Load and Require Module",
		"%l_implement1": "<img src='images/studio_modules.png' style='width:400px;float:right;'/>Declare in tiapp.xml",
		"%l_implement2": "<img src='images/module_require.png' style='clear:right;width:300px;float:right;'/>Require in JavaScript",
		"%l_implement3": "Implement",
		"%l_use_mod": "(Every marketplace module comes with example and doc)",
		"%l_slidenote_implementmodule": "",

		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_download_install": "Download and install the PayPal module",
		"%l_include_app": "Include it within an app",
		"%l_enable_sandbox": "Enable sandbox-mode PayPal functionality in your app",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/370+-+Installing+and+using+a+Titanium+Module'>wiki.appcelerator.org/display/td/370+-+Installing+and+using+a+Titanium+Module</a>",
		"%l_slidenote_lab_goals": "Will need to be able to install and demo a module, any module.  PayPal works well for demo since you can do it cross platform and it works on Simulator"
	}
});
