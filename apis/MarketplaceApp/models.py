from django.db import models
class Items(models.Model):
    itemId = models.AutoField(primary_key=True)
    price = models.BigIntegerField()
    name = models.CharField(max_length=500)
    condition = models.CharField(max_length=50)
    ph = models.CharField(max_length=10)
    address = models.CharField(max_length=500)
    filename = models.CharField(max_length=50)

class FavItems(models.Model):
    userId = models.CharField(primary_key=True, max_length=200) 
    fitemId = models.JSONField(models.BigIntegerField(), null=True)
    #fflag = models.CharField(max_length=10)
    # fprice = models.BigIntegerField()
    # fname = models.CharField(max_length=500)
    # fcondition = models.CharField(max_length=50)
    # fph = models.CharField(max_length=10)
    # faddress = models.CharField(max_length=500)
    # ffilename = models.CharField(max_length=50)
    