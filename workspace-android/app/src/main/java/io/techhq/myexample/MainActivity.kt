package io.techhq.myexample

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import io.techhq.myexample.contracts.SimpleStorage
import org.web3j.crypto.Credentials
import org.web3j.crypto.WalletUtils
import org.web3j.protocol.Web3j
import org.web3j.protocol.http.HttpService
import org.web3j.tx.gas.DefaultGasProvider
import java.io.File


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val web3 = Web3j.build(HttpService("http://localhost:8545"))
        val web3ClientVersion = web3.web3ClientVersion().send()
        val clientVersion = web3ClientVersion.web3ClientVersion
        println(clientVersion)

        val credentials: Credentials =
            WalletUtils.loadCredentials("password",
                String.format(
                    "%s%slocalhost%skeystore",
                    WalletUtils.getDefaultKeyDirectory(),
                    File.separator,
                    File.separator
                ))
        val contract: SimpleStorage = SimpleStorage.load(
                "0x<address>|<ensName>", web3, credentials, DefaultGasProvider())
        println(contract.get().send())
    }
}
