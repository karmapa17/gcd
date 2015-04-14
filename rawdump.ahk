^j::
    cb = 
	Loop,25182 {
	   Send ^a
	   Send ^c
	   ClipWait
	   cb=%cb%`r`n==%clipboard%==`r`n
	   Send {Tab}
	   Send ^a
	   Send ^c
	   ClipWait
	   cb=%cb%%clipboard%
	   
	   Send {Tab}
	   Send {Down}
	}
	FileAppend, %cb%, C:\dump_tibetanreader\gcd.txt
Return
