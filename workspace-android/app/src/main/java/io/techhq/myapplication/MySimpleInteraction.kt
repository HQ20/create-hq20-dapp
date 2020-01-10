package io.techhq.myexample

import io.techhq.myapplication.contracts.SimpleStorage
import org.web3j.crypto.Credentials
import org.web3j.crypto.WalletUtils
import org.web3j.protocol.Web3j
import org.web3j.protocol.http.HttpService
import org.web3j.tx.gas.DefaultGasProvider
import java.io.File

class MySimpleInteraction {
    fun connectAndCall(): Long {
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
            "0xf2Dee5975A808f16f93bf4Fd55aB5481a8B20497", web3, credentials, DefaultGasProvider()
        )
        return contract.get().send().toLong()
    }
}