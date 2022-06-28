# Password Generator Starter Code
The program takes in the requested criteria, lowercase, uppercase, numbers and special characters to build it.
It begins by asking a series of questions answered with y or n, any other answer than y will default to not using that criteria.

The script will also detect if there are less than 10 characters (numbers) able to be used, in that case it will default to using
lowercase letters. 

Just as well, the program defaults to at least 8 characters and maximum of 128 characters when prompted with how long the password
should be. This also applies to anything else that may be written within the box.

There is a fairly simple for loop as well, essentially taking random values from the array (also built out of the selections from
previous prompts) and will build the password accordingly. 

I also added two console logs to make sure that the password is the right length and so are the amount of characters in the array.

The password displays correctly on the page depending on what your criteria was, which I am honestly really proud of.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

I couldn't figure out how to make the page reset when you click the button without absolutely destroying the program, so as a result
you have to refresh the page per password. It wasn't listed within the criteria but I will be asking about this in class.