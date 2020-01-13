package io.techhq.myapplication

import io.mockk.every
import io.mockk.mockkStatic
import io.techhq.myexample.MySimpleInteraction
import org.junit.Assert.assertEquals
import org.junit.Test
import org.web3j.crypto.Credentials
import org.web3j.crypto.WalletUtils


/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
class ExampleUnitTest {
    @Test
    fun connectAndCall_isCorrect() {
        mockkStatic(WalletUtils::class)
        val userPrivateKey = "3b362746a64cc22a72b8a584e4da11047cc4b1924ce9b521b3ab0a12bdc16a6b"
        every { WalletUtils.loadCredentials("password", any<String>()) } returns Credentials.create(userPrivateKey)

        val msi = MySimpleInteraction()
        assertEquals(5, msi.connectAndCall())
    }
}
