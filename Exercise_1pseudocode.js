/* 
No 1 

SET massa to 600 
SET percepatan to 2
SET Resultan to massa multiply by percepatan
DISPLAY Resultan

No 2

PSEUDOCODE

SET tahun to 2019

IF tahun modulus 4 equal to zero and tahun modulus 100 have remainder
DISPLAY tahun kabisat

ELSE IF tahun modulus 4 equal to zero and tahun modulus 100 equal to zero and tahun modulus 400 equal to zero
DISPLAY tahun kabisat

ELSE 
DISPLAY bukan tahun kabisat

END IF

ALGORITMA

STEP 1 : Start
STEP 2 : Declare tahun
STEP 3 : Read value of tahun
STEP 4 : IF tahun % 4 = 0 and tahun % 100 != 0
          DISPLAY tahun kabisat
         ELSE IF tahun % 4 = 0 and tahun % 100 = 0 and tahun modulus 400 = 0
          DISPLAY tahun kabisat
         ELSE
          DISPLAY bukan tahun kabisat
STEP 4 : Stop

No 3

PSEUDOCODE

SET jumlah baju equal to zero

WHILE jumlah baju less equal than 20
  IF baju equal to zero
    DISPLAY 'belum ada baju'
  END IF
  baju plus one until baju equal to 20
  IF baju less than 20
    DISPLAY 'jumlah baju , belum bisa dicuci'
  END IF
  IF baju equal to 20
    DISPLAY 'jumlah baju cukup, bisa dicuci'
  END IF
END WHILE

ALGORITMA

Step 1	: Start
Step 2	: Declare jumlah baju 
Step 3	: Read value jumlah baju
Step 4	: While jumlah baju <= 20
	          if baju = 0
              display 'belum ada baju'
            end if
            baju + 1 until baju = 20
            if baju < 20
              display 'jumlah baju, belum bisa dicuci'
            end if
            if baju = 20
              display 'jumlah baju cukup, bisa dicuci'
            end if
          end while
Step 5	: Stop

No 4

PSEUDOCODE

SET murid equal to 0
SET kuku equal to panjang

WHILE murid less equal than 40
  IF murid equal to zero
    DISPLAY 'belum ada murid yang diperiksa'
  END IF
  ADD murid by 1 until 40
  IF murid less than 40
    IF kuku equal to panjang
      DISPLAY 'murid ke , dimarahi guru'
    ELSE
      DISPLAY 'murid ke, dipuji guru'
    END IF
  END IF
  IF murid equal to 40
    IF kuku equal to panjang
      DISPLAY 'murid ke , dimarahi guru. Pemeriksaan selesai !'
    ELSE
      DISPLAY 'murid ke, dipuji guru. Pemeriksaan selesai !'
    END IF
  END IF
END WHILE

ALGORITMA

Step 1	: Start
Step 2	: Declare murid and kuku
Step 3	: Read Value murid and kuku
step 4	: While murid <= 40
           If murid = 0
              display 'belum ada murid yang diperiksa'
           End if
           murid + 1 until murid = 40
           If murid < 40
              if kuku = panjang
                display 'murid ke , dimarahi guru'
              else
                display ' murid ke , dipuji guru'
              end if
           end if
           if murid = 40
             if kuku = panjang
                display 'murid ke , dimarahi guru. Pemeriksaan selsesai !'
              else
                display ' murid ke , dipuji guru. Pemeriksaan selesai !'
              end if
           end if
          End While
Step 5	: Stop

*/

